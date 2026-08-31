-- Enable RLS on all tables
ALTER TABLE classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE subjects ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE quizzes ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_options ENABLE ROW LEVEL SECURITY;

-- Public read access policies for PUBLISHED/ACTIVE content
-- Assuming public content does not require authentication

CREATE POLICY "Public users can view active classes" ON classes
    FOR SELECT USING (is_active = true);

CREATE POLICY "Public users can view active subjects" ON subjects
    FOR SELECT USING (is_active = true);

CREATE POLICY "Public users can view active chapters" ON chapters
    FOR SELECT USING (is_active = true);

CREATE POLICY "Public users can view active topics" ON topics
    FOR SELECT USING (is_active = true);

CREATE POLICY "Public users can view published lessons" ON lessons
    FOR SELECT USING (status = 'PUBLISHED');

CREATE POLICY "Public users can view published quizzes" ON quizzes
    FOR SELECT USING (status = 'PUBLISHED');

CREATE POLICY "Public users can view quiz questions for published quizzes" ON quiz_questions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM quizzes
            WHERE quizzes.id = quiz_questions.quiz_id
            AND quizzes.status = 'PUBLISHED'
        )
    );

CREATE POLICY "Public users can view quiz options for published quizzes" ON quiz_options
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM quiz_questions
            JOIN quizzes ON quizzes.id = quiz_questions.quiz_id
            WHERE quiz_questions.id = quiz_options.question_id
            AND quizzes.status = 'PUBLISHED'
        )
    );

-- Admin full access policies
-- Assuming admin has role 'service_role' or a custom JWT claim/auth.role()

CREATE POLICY "Admins have full access to classes" ON classes FOR ALL
    USING (auth.role() = 'authenticated');

CREATE POLICY "Admins have full access to subjects" ON subjects FOR ALL
    USING (auth.role() = 'authenticated');

CREATE POLICY "Admins have full access to chapters" ON chapters FOR ALL
    USING (auth.role() = 'authenticated');

CREATE POLICY "Admins have full access to topics" ON topics FOR ALL
    USING (auth.role() = 'authenticated');

CREATE POLICY "Admins have full access to lessons" ON lessons FOR ALL
    USING (auth.role() = 'authenticated');

CREATE POLICY "Admins have full access to quizzes" ON quizzes FOR ALL
    USING (auth.role() = 'authenticated');

CREATE POLICY "Admins have full access to quiz_questions" ON quiz_questions FOR ALL
    USING (auth.role() = 'authenticated');

CREATE POLICY "Admins have full access to quiz_options" ON quiz_options FOR ALL
    USING (auth.role() = 'authenticated');
