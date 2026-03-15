import { useState } from "react"
import AttendanceForm from "../components/AttendanceForm"
import AttendanceList from "../components/AttendanceList"

function AttendancePage() {

  const [refresh, setRefresh] = useState(false)

  const reload = () => {
    setRefresh(!refresh)
  }

  return (

    <div className="container mt-4">

      <h2>Attendance Management</h2>

      {/* Attendance Form */}

      <AttendanceForm refresh={reload} />

      <hr />

      {/* Attendance Records */}

      <AttendanceList refresh={refresh} />

    </div>

  )
}

export default AttendancePage