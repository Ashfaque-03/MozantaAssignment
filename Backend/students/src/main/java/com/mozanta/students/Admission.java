package com.mozanta.students;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "admissions")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Admission {   //for auto generating unique admission no:
    
    @Id
    private ObjectId id;

    private Integer initialId; // starting or initial id(only saving last integer value)

    private Integer nextId; // it shows the value of id of next newly creating student

    public Integer getInitialId(){
        return initialId;
    }

    public void setIntialId(Integer initialId){
        this.initialId=initialId;
    }

    public Integer getNextId(){
        return nextId;
    }

    public void setNextId(Integer nextId){
        this.nextId=nextId;
    }
}
