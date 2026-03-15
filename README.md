# HRMS Lite

A simple **Human Resource Management System (HRMS)** built with **Django REST Framework** for the backend and **React** for the frontend.  

---

## **Features**

- Add, view, and delete employees  
- Mark and view attendance  
- Filter attendance by date and status  
- Fully deployed and accessible online  

---

## **Tech Stack**

- **Backend:** Django 5.2, Django REST Framework, SQLite (for free tier)  
- **Frontend:** React (Create React App), Axios  
- **Deployment:** Render (Backend), Vercel (Frontend)  
- **CORS Handling:** `django-cors-headers`  

---

## **Frontend URL**

[https://hrms-lite-mu-five.vercel.app/](https://hrms-lite-mu-five.vercel.app/)

---

## **Backend URL**

[https://hrms-lite-lkkc.onrender.com](https://hrms-lite-lkkc.onrender.com)

---

## **Usage**

1. **Add Employees**
   - Go to the frontend → Employee Form  
   - Fill in employee details → Submit  

2. **View Employees**
   - Employee List table shows all employees  

3. **Mark Attendance**
   - Go to Attendance Form → Select employee, date, and status → Submit  

4. **View Attendance**
   - Attendance List table shows all records  
   - Filter by date or status  

---

## **Project Structure**
hrms-lite
│
├── backend
│ ├── hrms
│ ├── employees
│ ├── attendance
│ ├── manage.py
│ └── requirements.txt
│
├── frontend
│ ├── src
│ ├── public
│ └── package.json
│
└── README.md


---

## Usage

### 1️⃣ Add Employees
- Open the frontend → Employee Form  
- Fill in Employee ID, Name, Email, Department → Submit  

### 2️⃣ View Employees
- Employee List table shows all added employees  
- Delete button removes an employee  

### 3️⃣ Mark Attendance
- Go to Attendance Form  
- Select employee, date, and status → Submit  

### 4️⃣ View Attendance
- Attendance List table shows all records  
- Filter by date or status  

---

## Frontend Configuration

- Axios base URL points to Render backend:

```javascript
import axios from "axios";

const API = axios.create({
  baseURL: "https://hrms-lite-lkkc.onrender.com/api/",
});

export default API;

---------------------------------
Backend Deployment Notes

On Render Free Tier, migrations are applied automatically using:

bash -c "python manage.py migrate && gunicorn hrms.wsgi:application --bind 0.0.0.0:$PORT"

Ensure ALLOWED_HOSTS in settings.py includes:

ALLOWED_HOSTS = ["hrms-lite-lkkc.onrender.com", "localhost", "127.0.0.1"]
or 
ALLOWED_HOSTS = ["*"]