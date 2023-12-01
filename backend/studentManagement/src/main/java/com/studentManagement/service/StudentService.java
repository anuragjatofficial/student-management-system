package com.studentManagement.service;

import com.studentManagement.modal.Student;

import java.util.List;

public interface StudentService {
    Student getStudentById(String studentId);

    Student addNewStudent(Student student);

    List<Student> getAllStudent();

    Student updateStudent(Student student, String studentId);
    String deleteStudent(String studentId);
}
