import { useEffect, useState } from "react"
import API from "../services/api"

function EmployeeList({ refresh }) {

  const [employees, setEmployees] = useState([])

  const loadEmployees = async () => {
    const res = await API.get("/employees/")
    setEmployees(res.data)
  }

  useEffect(() => {
    loadEmployees()
  }, [refresh])

  const deleteEmployee = async (id) => {
    await API.delete(`/employees/${id}/`)
    loadEmployees()
  }

  return (

    <div>

      <h3>Employees</h3>

      <table className="table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr key={emp.id}>

              <td>{emp.employee_id}</td>
              <td>{emp.full_name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>

              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteEmployee(emp.id)}
                >
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}

export default EmployeeList