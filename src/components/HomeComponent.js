import React from 'react'

import StdForm from './StudentFormComponent/StdFormComponent';
import StdDetails from './StudentDetailsComponent/StdDetailsComponent';

export default function HomeComponent() {
  return (
    <>
        <div className='stdForm'><StdForm/></div>{/* for student details adding form */}
        <div className='stdTable'><StdDetails/></div> {/* for student details table */}
    </>
  )
}
