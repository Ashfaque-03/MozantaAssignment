import axios  from "axios";

const student_details_api_url = "http://localhost:8080/api/v1/students/details";
const student_create_api_url = "http://localhost:8080/api/v1/students/create";
class StudentService{
    getStudentDetails(){
        // <T>= <any>
        return axios.get(student_details_api_url);
    }
    createStudent(student){
        return axios.post(student_create_api_url, student)
        .then(function(response) {
            console.log(response);
          }).catch(function(error) {
            console.log(error);
          })
    }
}
const studentService = new StudentService()

export default studentService