-- Seed classes
INSERT INTO classes (id, name, display_name, sort_order) VALUES
    ('00000000-0000-0000-0000-000000000007', 'Class 7', 'Class 7', 1),
    ('00000000-0000-0000-0000-000000000008', 'Class 8', 'Class 8', 2);

-- Seed subjects
INSERT INTO subjects (id, class_id, name, display_name, description, sort_order) VALUES
    ('00000000-0000-0000-0000-000000000101', '00000000-0000-0000-0000-000000000007', 'Science', 'Science', 'Class 7 Science Curriculum', 1),
    ('00000000-0000-0000-0000-000000000201', '00000000-0000-0000-0000-000000000008', 'Science', 'Science', 'Class 8 Science Curriculum', 1),
    ('00000000-0000-0000-0000-000000000202', '00000000-0000-0000-0000-000000000008', 'Mathematics', 'Mathematics', 'Class 8 Mathematics', 2);

-- Seed chapters
INSERT INTO chapters (id, subject_id, title, description, chapter_number, sort_order) VALUES
    ('00000000-0000-0000-0000-000000001001', '00000000-0000-0000-0000-000000000201', 'Crop Production and Management', 'Learn about agricultural practices.', 1, 1),
    ('00000000-0000-0000-0000-000000001002', '00000000-0000-0000-0000-000000000201', 'Microorganisms', 'Friend and foe.', 2, 2);

-- Seed topics
INSERT INTO topics (id, chapter_id, title, description, sort_order) VALUES
    ('00000000-0000-0000-0000-000000010001', '00000000-0000-0000-0000-000000001002', 'Introduction to Microorganisms', 'What are microorganisms?', 1),
    ('00000000-0000-0000-0000-000000010002', '00000000-0000-0000-0000-000000001002', 'Useful Microorganisms', 'How they help us.', 2);

-- Seed lessons
INSERT INTO lessons (id, topic_id, title, description, youtube_video_id, youtube_url, duration_seconds, status, sort_order) VALUES
    ('00000000-0000-0000-0000-000000100001', '00000000-0000-0000-0000-000000010001', 'What are Microbes?', 'A quick introduction to microbes.', 'dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 212, 'PUBLISHED', 1),
    ('00000000-0000-0000-0000-000000100002', '00000000-0000-0000-0000-000000010002', 'Beneficial Microbes in Food', 'How we use microbes for curd and bread.', 'dQw4w9WgXcQ', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 150, 'PUBLISHED', 1);

-- Seed quizzes
INSERT INTO quizzes (id, topic_id, title, description, status, sort_order) VALUES
    ('00000000-0000-0000-0000-000001000001', '00000000-0000-0000-0000-000000010001', 'Quick Check — Microbes', 'Test your knowledge on microbes.', 'PUBLISHED', 1);

-- Seed questions
INSERT INTO quiz_questions (id, quiz_id, question, explanation, sort_order) VALUES
    ('00000000-0000-0000-0000-000010000001', '00000000-0000-0000-0000-000001000001', 'Which of the following is NOT a microorganism?', 'Mushrooms are macro-fungi, not microorganisms.', 1);

-- Seed options
INSERT INTO quiz_options (id, question_id, option_text, is_correct, sort_order) VALUES
    ('00000000-0000-0000-0000-000100000001', '00000000-0000-0000-0000-000010000001', 'Bacteria', false, 1),
    ('00000000-0000-0000-0000-000100000002', '00000000-0000-0000-0000-000010000001', 'Virus', false, 2),
    ('00000000-0000-0000-0000-000100000003', '00000000-0000-0000-0000-000010000001', 'Mushroom', true, 3),
    ('00000000-0000-0000-0000-000100000004', '00000000-0000-0000-0000-000010000001', 'Protozoa', false, 4);
