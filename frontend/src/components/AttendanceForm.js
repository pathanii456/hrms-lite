import { useState, useEffect } from "react"
import API from "../services/api"

function AttendanceForm({ refresh }) {

  const [employees, setEmployees] = useState([])

  const [data, setData] = useState({
    employee: "",
    date: "",
    status: "present"
  })

  useEffect(() => {
    loadEmployees()
  }, [])

  const loadEmployees = async () => {
    const res = await API.get("/employees/")
    setEmployees(res.data)
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    await API.post("/attendance/", data)

    alert("Attendance Marked")

    setData({
      employee: "",
      date: "",
      status: "present"
    })

    refresh()
  }

  return (

    <div>

      <h3>Mark Attendance</h3>

      <form onSubmit={handleSubmit}>

        <select
          value={data.employee}
          onChange={(e) =>
            setData({ ...data, employee: e.target.value })
          }
        >

          <option value="">Select Employee</option>

          {employees.map(emp => (
            <option key={emp.id} value={emp.id}>
              {emp.full_name}
            </option>
          ))}

        </select>

        <br /><br />

        <input
          type="date"
          value={data.date}
          onChange={(e) =>
            setData({ ...data, date: e.target.value })
          }
        />

        <br /><br />

        <select
          value={data.status}
          onChange={(e) =>
            setData({ ...data, status: e.target.value })
          }
        >

          <option value="present">Present</option>
          <option value="absent">Absent</option>

        </select>

        <br /><br />

        <button type="submit">Submit</button>

      </form>

    </div>

  )
}

export default AttendanceForm