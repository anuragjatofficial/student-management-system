package com.studentManagement.exception;


import lombok.NoArgsConstructor;

@NoArgsConstructor
public class StudentNotFoundException extends RuntimeException{
    public StudentNotFoundException(String string) {
        super();
    }

}
