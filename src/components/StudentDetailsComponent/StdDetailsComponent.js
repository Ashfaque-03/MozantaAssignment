import React, { useState, useEffect } from 'react'

import './StdDetails.css';
import { MDBTable, MDBTableBody, MDBTableHead} from 'mdb-react-ui-kit';
import studentService from '../../services/StudentService';

export default function StdDetailsComponent() {

    const [students, setStudents] = useState([]);
    const [sortState, setSortState] = useState("0");

    const sortMethods = {
        0:{ method: (a, b) => (a.name > b.name ? 1 : -1) },
        none: { method: (a, b) => (a.admNo > b.admNo ? 1 : -1) },
        ascending: { method: (a, b) => (a.name > b.name ? 1 : -1) },
        descending: { method: (a, b) => (a.name > b.name ? -1 : 1) },
    };

    useEffect(() => {
        loadStudents();
    }, [])

    const loadStudents = async () => {
        const result = await studentService.getStudentDetails();
        setStudents(result.data);
    }

    // const deleteStudent=(id)=>{
    //     console.log(id)
    // }
    return (
        <div className='right-box'>
            <div id='tableBox'>
                <div id='tableHead' className='mb-1'>
                    <h4 className=''>
                        Students Details
                    </h4>
                    <div>
                        {/* <i className="fa fa-angle-down downIcon" ></i> */}
                        <select
                            className='select cp'
                            defaultValue={'0'}
                            onChange={(e) => setSortState(e.target.value)}
                        >
                            <option value="0" disabled>Sort </option>
                            <option value="none">None</option>
                            <option value="ascending">A-Z</option>
                            <option value="descending">Z-A</option>
                        </select>
                        
                    </div>
                    
                </div>

                <MDBTable responsive color='' scrollY>
                    <MDBTableHead >
                        <tr className='table-actives Tfields'>
                            <th scope='col'>#</th>
                            <th scope='col'>Admn Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Date Of Birth</th>
                            <th scope='col'>Class</th>
                            <th scope='col'>Division</th>
                            <th scope='col'>Gender</th>
                            <th scope='col'>Edit</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            students.sort(sortMethods[sortState].method).map((student, index) =>
                                <tr key={index}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{student.admNo}</td>
                                    <td className='text-start'>{student.name}</td>
                                    <td>{student.dateOfBirth}</td>
                                    <td>{student.cls}</td>
                                    <td>{student.division}</td>
                                    <td>{student.gender}</td>
                                    <td>
                                        <i className='fa fa-trash-o cp delIcon'></i>
                                    </td>
                                </tr>
                            )
                        }

                    </MDBTableBody>
                </MDBTable>
            </div>

        </div>
    )
}

