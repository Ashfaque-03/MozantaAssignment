package com.mozanta.students;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Document(collection = "students")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {

    @Id
    private ObjectId id;

    private String admNo;

    private String name;

    private String dateOfBirth;

    private String cls;

    private String division;

    private String gender;

    public String getAdmNo(){
        return admNo;
    }
    public void setAdmNo(String admNo){
        this.admNo=admNo;
    }
    public String getName(){
        return name;
    }
    public void setSname(String name){
        this.name=name;
    }
    public String getDateOfBirth(){
        return dateOfBirth;
    }
    public void setDateOfBirth(String dateOfBirth){
        this.dateOfBirth=dateOfBirth;
    }
    public String getCls(){
        return cls;
    }
    public void setCls(String cls){
        this.cls=cls;
    }
    public String getDivison(){
        return division;
    }
    public void setDivison(String division){
        this.division=division;
    }
    public String getGender(){
        return gender;
    }
    public void setGender(String gender){
        this.gender=gender;
    }
    // public Student(String admNo, String name, String dateOfBirth, String cls, String division, String gender) {
    //     this.admNo = admNo;
    //     this.name = name;
    //     this.dateOfBirth = dateOfBirth;
    //     this.cls = cls;
    //     this.division = division;
    //     this.gender = gender;
    // }

    
}
