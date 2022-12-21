import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { store } from './Detail'
import '../Component/Style.css';



const Student = () => {
    const [student]=useContext(store)
  return (
    <div>

<div><Link to="/add-student">
  <h1 className='text'>Add Student</h1></Link></div>

<table border={"8px"} style={{backgroundColor:"white"}} className="table table-bordered border-primary">
  
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>

    </tr>
  

  <tbody style={{color :"black"}}>
      {student.map((student)=>(<tr key={student.id}>

<td style={{backgroundColor:"white"}}>{student.Name}</td>
<td style={{backgroundColor:"white"}}>{student.Age}</td>
<td style={{backgroundColor:"white"}}>{student.Course}</td>
<td style={{backgroundColor:"white"}}>{student.Batch}</td>
<td ><Link to="/Update">Edit</Link></td>

</tr>
      ))}
  
  </tbody>
</table>




    </div>
  )
}

export default Student