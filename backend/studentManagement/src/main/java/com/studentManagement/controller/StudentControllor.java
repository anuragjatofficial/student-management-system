package com.studentManagement.controller;

import com.studentManagement.modal.Student;
import com.studentManagement.service.StudentService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin("*")
public class StudentControllor {

    @Autowired
    private StudentService studentService;

    @GetMapping("/{studentId}")
    private ResponseEntity<Student> getStudentById(@PathVariable String studentId) {
        return new ResponseEntity<Student>(studentService.getStudentById(studentId), HttpStatus.OK);
    }

    @PostMapping
    private ResponseEntity<Student> addNewStudent(@Valid @RequestBody Student student) {
        return new ResponseEntity<Student>(studentService.addNewStudent(student), HttpStatus.CREATED);
    }

    @GetMapping
    private ResponseEntity<List<Student>> getAllStudent() {
        return new ResponseEntity<List<Student>>(studentService.getAllStudent(), HttpStatus.OK);
    }

    @PutMapping("/{studentId}")
    private ResponseEntity<Student> updateStudent(@PathVariable String studentId, @RequestBody Student student) {
        return new ResponseEntity<Student>(studentService.updateStudent(student, studentId), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{studentId}")
    private ResponseEntity<String> deleteStudent(@PathVariable String studentId) {
        return new ResponseEntity<String>(studentService.deleteStudent(studentId), HttpStatus.ACCEPTED);
    }
}
