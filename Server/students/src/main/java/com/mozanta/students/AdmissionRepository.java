package com.mozanta.students;

// import java.util.Optional;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdmissionRepository extends MongoRepository<Admission, ObjectId>{
    Admission findByInitialId(Integer initialId); // for taking the intial id other than its object id
}
