package com.studentManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.studentManagement.exception.StudentNotFoundException;
import com.studentManagement.modal.Student;
import com.studentManagement.repository.StudentRepository;
import org.springframework.stereotype.Service;

@Service

public class StudentServiceImpl implements StudentService {
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student addNewStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public Student updateStudent(Student student, String studentId) {
        Student student1 = getStudentById(studentId);

        student1.setFirstname(student.getFirstname());
        student1.setLastname(student.getLastname());
        student1.setDob(student.getDob());
        student1.setPhone(student.getPhone());
        student1.setGender(student.getGender());
        student1.setAddress(student.getAddress());

        return studentRepository.save(student1);
    }

    @Override
    public List<Student> getAllStudent() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(String studentId) {
        return studentRepository.findById(studentId)
                                .orElseThrow(() -> new StudentNotFoundException("can't find any student with id "
                                                                                + studentId));
    }

	@Override
	public String deleteStudent(String studentId) {
		Student student = studentRepository.findById(studentId)
        .orElseThrow(() -> new StudentNotFoundException("can't find any student with id "
                                                        + studentId));
		studentRepository.delete(student);
		return "Student "+student.getFirstname()+" "+student.getLastname()+", successfully deleted from database";
	}
}
