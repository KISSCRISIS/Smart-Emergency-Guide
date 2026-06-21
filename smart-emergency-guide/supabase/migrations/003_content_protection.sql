-- ================================================
-- SMART EMERGENCY GUIDE - CONTENT PROTECTION
-- ================================================
-- ⚠️ NOTE: هاد الملف كان مقطوع/ناقص بالمستند الأصلي اللي زودتني فيه.
-- اللي تحت هو الجزء المتوفر بالضبط + استكمال بسيط منطقي لقفل الجدول
-- (CHECK constraint وRLS) حتى يصير صالح للتنفيذ. راجعه قبل ما تشغله،
-- وإذا عندك نسخة أصلية أكمل منه ابعتها وبحدّثه فوراً.
-- ================================================

-- Watermark Configuration
CREATE TABLE watermark_config (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    is_enabled BOOLEAN DEFAULT TRUE,
    opacity FLOAT DEFAULT 0.15,
    font_size INTEGER DEFAULT 14,
    rotation INTEGER DEFAULT 45,
    pattern_spacing INTEGER DEFAULT 200,
    show_user_name BOOLEAN DEFAULT TRUE,
    show_user_email BOOLEAN DEFAULT TRUE,
    show_timestamp BOOLEAN DEFAULT TRUE,
    show_brand BOOLEAN DEFAULT TRUE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Suspicious Activity Log
CREATE TABLE suspicious_activity (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    activity_type TEXT NOT NULL CHECK (activity_type IN (
        'excessive_copy_attempt',
        'excessive_right_click',
        'excessive_print_attempt',
        'devtools_suspected',
        'rapid_tab_switch',
        'multiple_failed_login',
        'other'
    )),
    severity TEXT DEFAULT 'low' CHECK (severity IN ('low', 'medium', 'high')),
    metadata JSONB DEFAULT '{}'::jsonb,
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_suspicious_activity_user_id ON suspicious_activity(user_id);
CREATE INDEX idx_suspicious_activity_type ON suspicious_activity(activity_type);

ALTER TABLE watermark_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE suspicious_activity ENABLE ROW LEVEL SECURITY;

CREATE POLICY watermark_config_select_policy ON watermark_config
    FOR SELECT USING (true);

CREATE POLICY suspicious_activity_insert_policy ON suspicious_activity
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY suspicious_activity_admin_select_policy ON suspicious_activity
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM profiles WHERE user_id = auth.uid() AND role = 'admin')
    );
