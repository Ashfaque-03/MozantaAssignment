import React, { Component } from 'react'

import './StdDetails.css';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import studentService from '../../services/StudentService';


export default class StdDetailsComponent extends Component {

  constructor(props){
    super(props)

    this.state ={
      students:[]
    }
  }

  componentDidMount(){
    studentService.getStudentDetails().then((res)=>{
      this.setState({ students: res.data })
    })
  }

  render() {
    return (
      <div className='right-box'>
      <div id='tableBox'>
          <h4 className='text-start'>Students Details</h4>
          <MDBTable  responsive color='' scrollY>
              <MDBTableHead >
                  <tr className='table-actives Tfields'>
                      <th scope='col'>#</th>
                      <th scope='col'>Admn Id</th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Date Of Birth</th>
                      <th scope='col'>Class</th>
                      <th scope='col'>Division</th>
                      <th scope='col'>Gender</th>
                  </tr>
              </MDBTableHead>
              <MDBTableBody>
                {
                  this.state.students.map(
                    student=>
                    <tr key={student.id}>
                      <th scope='row' class='slno'></th>
                      <td>{student.admNo}</td>
                      <td>{student.name}</td>
                      <td>{student.dateOfBirth}</td>
                      <td>{student.cls}</td>
                      <td>{student.division}</td>
                      <td>{student.gender}</td>
                  </tr>
                  )
                }
                  
              </MDBTableBody>
          </MDBTable>
      </div>

  </div>    
  )
  }
}
