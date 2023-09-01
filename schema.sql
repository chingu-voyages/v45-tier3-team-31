
CREATE TABLE IF NOT EXISTS  Teacher (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    otp VARCHAR(6) NOT NULL
);

CREATE TABLE IF NOT EXISTS  Class (
    id SERIAL PRIMARY KEY,
    class_name VARCHAR(50) NOT NULL,
    course_id INT NOT NULL,
    created_date DATE NOT NULL,
    status TEXT CHECK (status IN ('ongoing', 'closed')) NOT NULL
);

CREATE TABLE IF NOT EXISTS Student (
    id SERIAL PRIMARY KEY,
    parent_phone_number VARCHAR(15) NOT NULL,
    address VARCHAR(200) NOT NULL,
    attended_date DATE,
    image_url VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS  Attendance (
    id SERIAL PRIMARY KEY,
    student_id INT NOT NULL,
    class_id INT NOT NULL,
    date DATE NOT NULL,
    status TEXT CHECK (status IN ('absent', 'late', 'present')) NOT NULL,
    note TEXT
);

CREATE TABLE IF NOT EXISTS Criterion (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    class_id INT NOT NULL,
    criteria_name VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS  StudentGrade (
    id SERIAL PRIMARY KEY,
    class_id INT NOT NULL,
    student_id INT NOT NULL,
    date DATE NOT NULL,
    note TEXT,
    status TEXT CHECK (status IN ('pass', 'fail')) NOT NULL
);
