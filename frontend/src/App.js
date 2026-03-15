import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import EmployeesPage from "./pages/EmployeesPage"
import AttendancePage from "./pages/AttendancePage"

function App() {

  return (

    <BrowserRouter>

      <div className="container mt-4">

        <h1>HRMS Lite</h1>

        <nav style={{ marginBottom: "20px" }}>

          <Link to="/" style={{ marginRight: "20px" }}>
            Employees
          </Link>

          <Link to="/attendance">
            Attendance
          </Link>

        </nav>

        <Routes>

          <Route path="/" element={<EmployeesPage />} />

          <Route path="/attendance" element={<AttendancePage />} />

        </Routes>

      </div>

    </BrowserRouter>

  )
}

export default App