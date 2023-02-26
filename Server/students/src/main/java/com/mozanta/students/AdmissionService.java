package com.mozanta.students;

// import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdmissionService {
    @Autowired
    private StudentRepository studentRepository;

    // public Optional<User> getAdmission(){return userRepository.findByInitialId(1);}
    
    public Student addAdmNo(Student student, Integer nextId){
        String counter="";
        // converting the number n to a string  
        String str = Integer.toString(nextId);  
        // computing the size of the string  
        int len = str.length();  
        if(len==1){
            counter="00"+nextId;  // if nextid=1, counter="001"
        }
        else if(len==2){
            counter ="0"+nextId; // if nextid=11, counter="011"
        }
        else{
            counter+=nextId; // if nextid=111, counter="111"
        }
        String admNo = "R-"+counter;  // final output of admission number.
        student.setAdmNo(admNo);
        return studentRepository.insert(student);
    }
}
