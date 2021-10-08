import React from "react"

const Student = (props) => {
  return (
    <div>
      <p> Student {props.name} with student number {props.number} </p>
      {/* <p> Student is enrolled in Course {props.enrolled} </p> */}
      <p>Student is enrolled in: </p>
      {Array.from({ length: props.enrolled }, (_, i) => <p> Course {i} </p>)}
    </div>
  )
}

export default Student