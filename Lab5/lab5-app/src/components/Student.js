
const Student = ({match}) => {

  const {studentname} = match.params
  const {studentno} = match.params

  return (
    <div>
      <p>Student</p>
      <div>
        <div>{`The student name is "${studentname}" `}</div>
        <div>{`The student number is "${studentno}" `}</div>

      </div>
    </div>
  )
}


export default Student