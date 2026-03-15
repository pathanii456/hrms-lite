import { useEffect, useState, useCallback  } from "react"
import API from "../services/api"

function AttendanceList({ refresh }) {

  const [attendance, setAttendance] = useState([])
  const [date, setDate] = useState("")
  const [status, setStatus] = useState("")

// Wrap loadAttendance in useCallback so it's stable
  const loadAttendance = useCallback(async () => {
    let url = "/attendance/?"

    if (date) url += `date=${date}&`
    if (status) url += `status=${status}`

    const res = await API.get(url)
    setAttendance(res.data)
  }, [date, status]) // dependencies inside the function

  // Now include loadAttendance in useEffect dependencies
  useEffect(() => {
    loadAttendance()
  }, [refresh, loadAttendance])

  const clearFilters = () => {
    setDate("")
    setStatus("")
  }

  return (

    <div>

      <h3>Attendance Records</h3>

      {/* Filters */}

      <div style={{ marginBottom: "15px" }}>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ marginLeft: "10px" }}
        >

          <option value="">All</option>
          <option value="present">Present</option>
          <option value="absent">Absent</option>

        </select>

        {/* Clear Filters Button */}

        <button
          onClick={clearFilters}
          style={{ marginLeft: "10px" }}
        >
          Remove Filters
        </button>

      </div>

      <table className="table">

        <thead>
          <tr>
            <th>Employee</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {attendance.map((item) => (

            <tr key={item.id}>

              <td>{item.employee_code} - {item.employee_name}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}

export default AttendanceList