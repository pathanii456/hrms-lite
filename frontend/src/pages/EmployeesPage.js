import { useState } from "react"
import EmployeeForm from "../components/EmployeeForm"
import EmployeeList from "../components/EmployeeList"

function EmployeesPage() {

  const [refresh, setRefresh] = useState(false)

  const reload = () => {
    setRefresh(!refresh)
  }

  return (

    <div className="container mt-4">

      <h2>Employee Management</h2>

      <EmployeeForm refresh={reload} />

      <hr />

      <EmployeeList refresh={refresh} />

    </div>

  )
}

export default EmployeesPage