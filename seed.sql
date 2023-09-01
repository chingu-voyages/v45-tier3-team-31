-- Seed data for Teacher table
INSERT INTO Teacher (username, password, email, phone_number, otp)
VALUES
    ('teacher1', 'password1', 'teacher1@example.com', '123-456-7890', '123456'),
    ('teacher2', 'password2', 'teacher2@example.com', '987-654-3210', '654321'),
    ('teacher3', 'password3', 'teacher3@example.com', '555-555-5555', '987654');
    
-- Seed data for Class table
INSERT INTO Class (class_name, course_id, created_date, status)
VALUES
    ('Math 101', 101, '2023-01-15', 'ongoing'),
    ('Science 201', 201, '2023-02-10', 'ongoing'),
    ('History 301', 301, '2023-03-05', 'closed');

-- Seed data for Student table
INSERT INTO Student (parent_phone_number, address, attended_date, image_url)
VALUES
    ('111-222-3333', '123 Main St', '2023-01-15', 'student1.jpg'),
    ('444-555-6666', '456 Elm St', '2023-02-10', 'student2.jpg'),
    ('777-888-9999', '789 Oak St', '2023-03-05', 'student3.jpg');

-- Seed data for Attendance table
INSERT INTO Attendance (student_id, class_id, date, status, note)
VALUES
    (1, 1, '2023-01-15', 'present', NULL),
    (2, 1, '2023-01-15', 'late', 'Arrived 10 minutes late'),
    (3, 1, '2023-01-15', 'absent', 'Sick today'),
    (1, 2, '2023-02-10', 'present', NULL),
    (2, 2, '2023-02-10', 'present', NULL),
    (3, 2, '2023-02-10', 'late', 'Missed the bus'),
    (1, 3, '2023-03-05', 'present', NULL),
    (2, 3, '2023-03-05', 'absent', 'Family emergency'),
    (3, 3, '2023-03-05', 'present', NULL);

-- Seed data for Criterion table
INSERT INTO Criterion (date, class_id, criteria_name)
VALUES
    ('2023-01-15', 1, 'Homework'),
    ('2023-01-15', 1, 'Quiz'),
    ('2023-02-10', 2, 'Homework'),
    ('2023-02-10', 2, 'Test'),
    ('2023-03-05', 3, 'Project');

-- Seed data for StudentGrade table
INSERT INTO StudentGrade (class_id, student_id, date, note, status)
VALUES
    (1, 1, '2023-01-15', 'Completed on time', 'pass'),
    (1, 2, '2023-01-15', 'Late submission', 'fail'),
    (1, 3, '2023-01-15', 'Did not submit', 'fail'),
    (1, 1, '2023-01-15', 'Scored 90%', 'pass'),
    (1, 2, '2023-01-15', 'Scored 75%', 'pass'),
    (1, 3, '2023-01-15', 'Did not take the quiz', 'fail'),
    (2, 1, '2023-02-10', 'Completed on time', 'pass'),
    (2, 2, '2023-02-10', 'Family emergency', 'fail'),
    (2, 3, '2023-02-10', 'Scored 85%', 'pass'),
    (2, 1, '2023-02-10', 'Scored 95%', 'pass'),
    (2, 2, '2023-02-10', 'Scored 60%', 'fail'),
    (2, 3, '2023-02-10', 'Late submission', 'fail'),
    (3, 1, '2023-03-05', 'Completed on time', 'pass'),
    (3, 2, '2023-03-05', 'Did not submit', 'fail'),
    (3, 3, '2023-03-05', 'Scored 88%', 'pass');
