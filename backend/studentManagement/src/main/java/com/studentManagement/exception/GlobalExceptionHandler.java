package com.studentManagement.exception;

import java.time.LocalDateTime;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {
	
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorDetails> handleMethodArgumentNotValidException(
            MethodArgumentNotValidException exception, WebRequest webRequest) {
    	System.out.println("From MethodArgumentNotValidException");
        List<ObjectError> allErrors     = exception.getBindingResult().getAllErrors();
        List<String>      errorMessages = MethodArgumentNotValidException.errorsToStringList(allErrors);
        System.out.println(errorMessages);
        return new ResponseEntity<ErrorDetails>(new ErrorDetails(LocalDateTime.now(),
                                                                 String.join(", ", errorMessages),
                                                                 webRequest.getDescription(false)),
                                                HttpStatus.NOT_ACCEPTABLE);
    }

    @ExceptionHandler(NoHandlerFoundException.class)
    public ResponseEntity<ErrorDetails> handleNoHandlerFoundException(NoHandlerFoundException exception,
                                                                      WebRequest webRequest) {
    	System.out.println("From NoHandlerFoundException");
        return new ResponseEntity<ErrorDetails>(new ErrorDetails(LocalDateTime.now(),
                                                                 "There is no handler for this endpoint: "
                                                                 + webRequest.getDescription(false),
                                                                 webRequest.getDescription(false)),
                                                HttpStatus.NOT_ACCEPTABLE);
    }

    @ExceptionHandler(StudentNotFoundException.class)
    public ResponseEntity<ErrorDetails> handleStudentNotFoundException(StudentNotFoundException exception,
                                                                       WebRequest webRequest) {
    	System.out.println("From Student not found");
        return new ResponseEntity<ErrorDetails>(new ErrorDetails(LocalDateTime.now(),
                                                                 exception.getMessage(),
                                                                 webRequest.getDescription(false)),
                                                HttpStatus.NOT_FOUND);
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorDetails> globlalExceptionHandler(Exception exception,
                                                                       WebRequest webRequest) {
    	System.out.println("From Exception");
        return new ResponseEntity<ErrorDetails>(new ErrorDetails(LocalDateTime.now(),
                                                                 exception.getMessage(),
                                                                 webRequest.getDescription(false)),
                                                HttpStatus.NOT_FOUND);
    }
}

