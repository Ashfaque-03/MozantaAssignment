import React, { useState } from 'react';
import studentService from '../../services/StudentService';
import './StdForm.css';
import { MDBInput, MDBRadio } from 'mdb-react-ui-kit';

export default function StdFormComponent() {

    const [name, setName] = useState('');
    const [dob, setDOB] = useState('');
    const [cls, setCls] = useState('0');
    const [division, setDivision] = useState('0');
    const [gender, setGender] = useState('');

    // clear all inputs
    const refresh = () => {
        setName("")
        setDOB("")
        setCls('0')
        setDivision('0')
        setGender('')
        document.getElementById("flexRadioDefault1").checked = false;
        document.getElementById("flexRadioDefault2").checked = false;
    }
    return (
        <div className='left-box'>
            <div id='head'>
                <h2 id='school'>Mozanta Higher Secondary School</h2>
                <h6>Trivandrum, Kerala, Pincode-695581</h6>
            </div>
            {/* e=>event */}
            <form onSubmit={(e) => { checkInputs(name, dob, cls, division, gender); e.preventDefault(); }}>
                <div className='inpBox'>
                        <h3 className='mb-3'>
                            Add New Student
                            <i
                                className="fa fa-close  cp refreshIcon"
                                id="ref"
                                onClick={refresh}>
                            </i>
                        </h3>
                    <MDBInput
                        label='Full Name'
                        id='typeText'
                        name={name}
                        value={name}
                        type='text'
                        className='w-100'
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="Date"
                        name="dob"
                        value={dob}
                        id="date"
                        className='inp'
                        placeholder='Date Of Birth'
                        onChange={e => setDOB(e.target.value)}
                    />
                    <select
                        name="cls"
                        id="class"
                        value={cls}
                        className='sel cp'
                        onChange={e => setCls(e.target.value)} >
                        <option value="0" disabled required>Select Class</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                        <option value="IV">IV</option>
                        <option value="V">V</option>   f0dc
                        <option value="VI">VI</option>
                        <option value="VII">VII</option>
                        <option value="VII">VIII</option>
                        <option value="IX">IX</option>
                        <option value="X">X</option>
                        <option value="X11">X11</option>
                        <option value="X12">X12</option>
                    </select>
                    <select
                        name="division"
                        value={division}
                        id="division"
                        className='sel cp'
                        onChange={e => setDivision(e.target.value)} >
                        <option value="0" disabled>Select Division</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>

                    <div className='centered'>
                        <div className='gender'>Gender:</div>
                        <div className='centered'>
                            <div className='genderBox'>
                                <MDBRadio
                                    name='gender'
                                    id='flexRadioDefault1'
                                    label='Male'
                                    className='radioBtn cp'
                                    onClick={() => setGender("Male")}
                                />
                            </div>
                            <div className='genderBox'>
                                <MDBRadio
                                    name='gender'
                                    id='flexRadioDefault2'
                                    label='Female'
                                    className='radioBtn cp'
                                    onClick={() => setGender("Female")}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <input
                            type="submit"
                            name=""
                            id="inpSubmit"
                            value={"Submit"}
                            className='inp'
                        />
                    </div>
                </div>

            </form>

        </div>
    )
}

// checking the name field contains only letters and whitespace
function onlyLettersAndSpaces(str) { 
    if(/^[A-Za-z]*$/.test(str.charAt(0))){
        if(str.length>=2 && str.length<=100){
            return /^[A-Za-z\s]*$/.test(str);
        }
    }
    
    return false;
}

// validating inputs
function checkInputs(name, dob, cls, division, gender) {
    if (!name || !dob || !gender) {
        alert("please fill all fields")
    }
    else {
        var bool = onlyLettersAndSpaces(name);
        if (bool === true) {
            if (cls !== "0") {
                if (division !== "0") {
                    const student = {
                        name,
                        dateOfBirth: dob,
                        cls,
                        division,
                        gender
                    }
                    confirmSubmit(student);
                    alert("Successfully Added")
                    document.location.reload();
                }
                else {
                    alert("please select division of student")
                }
            }
            else {
                alert("please select class of student")
            }
        }
        else {
            alert("please use aplhapets only")
        }
    }
}

const confirmSubmit = async (student) => {
    let result = studentService.createStudent(student);
    console.log(result);
}
