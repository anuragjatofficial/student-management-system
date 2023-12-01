package com.studentManagement.exception;



public class StudentNotFoundException extends RuntimeException{
    public StudentNotFoundException(String string) {
        super(string);
    }
    public StudentNotFoundException(){
    	super("Student Not Found");
    }

}
