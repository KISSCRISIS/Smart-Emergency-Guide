-- ================================================
-- SMART EMERGENCY GUIDE - AUTH & PROFILES
-- ================================================

-- Function to approve a user
CREATE OR REPLACE FUNCTION approve_user(
    user_id_param UUID,
    admin_id_param UUID
)
RETURNS VOID AS $$
BEGIN
    -- ⚠️ SECURITY: verify caller is actually an admin before privileged update
    IF NOT EXISTS (
        SELECT 1 FROM profiles WHERE user_id = admin_id_param AND role = 'admin'
    ) THEN
        RAISE EXCEPTION 'Unauthorized: caller is not an admin';
    END IF;

    UPDATE profiles
    SET
        status = 'approved',
        approved_at = NOW(),
        approved_by = admin_id_param,
        updated_at = NOW()
    WHERE user_id = user_id_param;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to reject a user
CREATE OR REPLACE FUNCTION reject_user(
    user_id_param UUID,
    admin_id_param UUID
)
RETURNS VOID AS $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM profiles WHERE user_id = admin_id_param AND role = 'admin'
    ) THEN
        RAISE EXCEPTION 'Unauthorized: caller is not an admin';
    END IF;

    UPDATE profiles
    SET
        status = 'rejected',
        rejected_at = NOW(),
        rejected_by = admin_id_param,
        updated_at = NOW()
    WHERE user_id = user_id_param;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to suspend a user
CREATE OR REPLACE FUNCTION suspend_user(
    user_id_param UUID,
    admin_id_param UUID,
    reason_param TEXT DEFAULT NULL
)
RETURNS VOID AS $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM profiles WHERE user_id = admin_id_param AND role = 'admin'
    ) THEN
        RAISE EXCEPTION 'Unauthorized: caller is not an admin';
    END IF;

    UPDATE profiles
    SET
        status = 'suspended',
        suspended_at = NOW(),
        suspended_by = admin_id_param,
        suspension_reason = reason_param,
        updated_at = NOW()
    WHERE user_id = user_id_param;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get pending users
CREATE OR REPLACE FUNCTION get_pending_users()
RETURNS TABLE(
    id UUID,
    real_full_name TEXT,
    email TEXT,
    mobile_number TEXT,
    age INTEGER,
    institution TEXT,
    training_level TEXT,
    created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        p.id,
        p.real_full_name,
        u.email,
        p.mobile_number,
        p.age,
        p.institution,
        p.training_level,
        p.created_at
    FROM profiles p
    JOIN auth.users u ON p.user_id = u.id
    WHERE p.status = 'pending'
    ORDER BY p.created_at ASC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
