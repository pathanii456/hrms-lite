import { useState } from "react"
import API from "../services/api"

function EmployeeForm({ refresh }) {

 const [data,setData] = useState({
  employee_id:"",
  full_name:"",
  email:"",
  department:""
 })

 const handleSubmit = async (e) => {
  e.preventDefault()

  await API.post("/employees/",data)

  refresh()
 }

 return (

 <form onSubmit={handleSubmit}>

  <input placeholder="Employee ID"
  onChange={e=>setData({...data,employee_id:e.target.value})}/>

  <input placeholder="Full Name"
  onChange={e=>setData({...data,full_name:e.target.value})}/>

  <input placeholder="Email"
  onChange={e=>setData({...data,email:e.target.value})}/>

  <input placeholder="Department"
  onChange={e=>setData({...data,department:e.target.value})}/>

  <button>Add Employee</button>

 </form>
 )
}

export default EmployeeForm