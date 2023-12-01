package com.studentManagement.modal;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

/*
 
 {
 "firstname";"Maximus",
 "lastname";" Wales",
 "phone";"9123456789",
 "gender";"MALE",
 "dob";"2000-01-01",
 "address";"Sparta"
 }
 
 */

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {

    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private String student_id;
    @NotBlank(message = "firstName can't be blank")
    private String firstname;
    @NotBlank(message = "lastname can't be blank")
    private String lastname;
    @NotBlank(message = "phone can't be blank ")
    private String phone;

    @Enumerated(EnumType.STRING)
    private Gender gender;
    @Past(message = "date of birth should be in past format")
    private LocalDate dob;

    @NotBlank
    private String address;
}
