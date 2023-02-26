package com.mozanta.students;
import java.util.*;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/students")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private StudentService studentService;

    @Autowired
    private AdmissionRepository admissionRepository;

    @Autowired
    private AdmissionService admissionService;

    // create student api
    @PostMapping("/create")
    public Object createStudent(@RequestBody Student student){
        // validation of data
        if(studentService.checkStudent(student)){      // On successful validation, generating an unique admission number.(R-001, R-002 etc)
            Integer initialId = 1, nextId = 2;        // initializing the initial id and nextid for creating unique Admission No
            if(admissionRepository.findAll().isEmpty()){ //checking empty or not
                Admission admission = new Admission();  //if empty then creating the new admission data
                admission.setInitialId(initialId); 
                admission.setNextId(nextId);
                admissionRepository.insert(admission);
                nextId=initialId; // for the first student, next id will be 1(R-001).
            }
            else{
                Admission admission = admissionRepository.findByInitialId(1);
                nextId=admission.getNextId();  // get nextId value for the current adding student
                admission.setNextId(nextId+1); //increment the value in nextId for the next student
                admissionRepository.save(admission);
            }
            student=studentService.capitalizeString(student);
            return admissionService.addAdmNo(student,nextId);  // generation of admission no and creation of the student details.
        }
        else{
            return "Please Check the fields";   
        }
    }

    // delete student api (for future update)
    @PostMapping("/delete/{id}")
    public void deleteStudent(@PathVariable ObjectId id){
        studentRepository.deleteById(id);
    }

    // get details of all students api
    @GetMapping("/details")
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }
    
}
