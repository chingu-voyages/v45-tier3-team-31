
CREATE TABLE Teacher (
    id INT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    otp VARCHAR(6) NOT NULL
);

CREATE TABLE Class (
    id INT PRIMARY KEY,
    course_id INT NOT NULL,
    created_date DATE NOT NULL,
    status ENUM('ongoing', 'closed') NOT NULL
);

CREATE TABLE Student (
    id INT PRIMARY KEY,
    parent_phone_number VARCHAR(15) NOT NULL,
    address VARCHAR(200) NOT NULL,
    attended_date DATE,
    image_url VARCHAR(200)
);

CREATE TABLE Attendance (
    id INT PRIMARY KEY,
    student_id INT NOT NULL,
    class_id INT NOT NULL,
    date DATE NOT NULL,
    status ENUM('absent', 'late', 'present') NOT NULL,
    note TEXT
);

CREATE TABLE Criterion (
    id INT PRIMARY KEY,
    date DATE NOT NULL,
    class_id INT NOT NULL,
    criteria_name VARCHAR(100) NOT NULL
);

CREATE TABLE StudentGrade (
    id INT PRIMARY KEY,
    class_id INT NOT NULL,
    student_id INT NOT NULL,
    date DATE NOT NULL,
    note TEXT,
    status ENUM('pass', 'fail') NOT NULL
);