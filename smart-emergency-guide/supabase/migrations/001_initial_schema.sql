-- ================================================
-- SMART EMERGENCY GUIDE - INITIAL SCHEMA
-- Version: 1.0.0
-- ================================================

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "unaccent";

-- ================================================
-- PROFILES TABLE
-- ================================================
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE NOT NULL,

    -- Registration Fields
    real_full_name TEXT NOT NULL,
    mobile_number TEXT NOT NULL,
    age INTEGER NOT NULL,
    institution TEXT,
    training_level TEXT CHECK (training_level IN (
        'medical_student', 'intern', 'resident_pgy1', 'resident_pgy2',
        'resident_pgy3', 'resident_pgy4', 'resident_pgy5',
        'attending', 'consultant', 'nurse_practitioner',
        'physician_assistant', 'paramedic', 'other'
    )),

    -- Status & Role
    role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('admin', 'student')),
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'suspended')),

    -- Admin Fields
    admin_note TEXT,
    approved_at TIMESTAMP WITH TIME ZONE,
    approved_by UUID REFERENCES auth.users(id),
    rejected_at TIMESTAMP WITH TIME ZONE,
    rejected_by UUID REFERENCES auth.users(id),
    suspended_at TIMESTAMP WITH TIME ZONE,
    suspended_by UUID REFERENCES auth.users(id),
    suspension_reason TEXT,

    -- Terms Acceptance
    terms_accepted BOOLEAN DEFAULT FALSE,
    terms_accepted_at TIMESTAMP WITH TIME ZONE,
    terms_version TEXT,

    -- Profile Fields
    profile_pic_url TEXT,
    bio TEXT,
    specialty TEXT,

    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_profiles_user_id ON profiles(user_id);
CREATE INDEX idx_profiles_status ON profiles(status);
CREATE INDEX idx_profiles_role ON profiles(role);
CREATE INDEX idx_profiles_status_role ON profiles(status, role);

-- ================================================
-- CONTENT ACCESS LOGS
-- ================================================
CREATE TABLE content_access_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    content_type TEXT NOT NULL CHECK (content_type IN (
        'page_view', 'image_view', 'copy_attempt', 'right_click_attempt',
        'print_attempt', 'screenshot_key_attempt', 'devtools_suspected',
        'tab_blur', 'suspicious_activity'
    )),
    content_id UUID,
    action TEXT,
    ip_address TEXT,
    user_agent TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_access_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY profiles_select_policy ON profiles
    FOR SELECT USING (
        auth.uid() = user_id OR
        EXISTS (SELECT 1 FROM profiles WHERE user_id = auth.uid() AND role = 'admin')
    );

CREATE POLICY profiles_update_policy ON profiles
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY content_access_logs_policy ON content_access_logs
    FOR INSERT WITH CHECK (auth.uid() = user_id);
