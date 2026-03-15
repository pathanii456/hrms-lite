# HRMS Lite

HRMS Lite is a simple Human Resource Management System built using **Django REST Framework** for the backend and **React.js** for the frontend.

The application allows managing employees and tracking their daily attendance.

---

## Features

### Employee Management
- Add new employees
- View employees list
- Delete employees

### Attendance Management
- Mark attendance for employees
- View attendance records
- Filter attendance by:
  - Date
  - Status (Present / Absent)
- Reset filters to view all records

---

## Tech Stack

### Backend
- Python
- Django
- Django REST Framework
- SQLite

### Frontend
- React.js
- Axios
- Bootstrap

---

## Project Structure

```
hrms-lite
│
├── backend
│   ├── employees
│   ├── attendance
│   └── manage.py
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── services
│
└── README.md
```

---

## Backend Setup

1. Navigate to backend folder

```
cd backend
```

2. Create virtual environment

```
python -m venv venv
```

3. Activate virtual environment

Windows

```
venv\Scripts\activate
```

Mac/Linux

```
source venv/bin/activate
```

4. Install dependencies

```
pip install django djangorestframework django-filter
```

5. Run migrations

```
python manage.py migrate
```

6. Start server

```
python manage.py runserver
```

Backend will run at:

```
http://127.0.0.1:8000/
```

---

## Frontend Setup

1. Navigate to frontend folder

```
cd frontend
```

2. Install dependencies

```
npm install
```

3. Start React app

```
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

## API Endpoints

### Employees

| Method | Endpoint | Description |
|------|------|------|
GET | /employees/ | List employees
POST | /employees/ | Create employee
DELETE | /employees/{id}/ | Delete employee

### Attendance

| Method | Endpoint | Description |
|------|------|------|
GET | /attendance/ | List attendance
POST | /attendance/ | Mark attendance

### Filters

```
/attendance/?date=YYYY-MM-DD
/attendance/?status=present
/attendance/?status=absent
```

---

## Example Attendance Record

```
Employee: EMP001 - Imran Pathan
Date: 2026-03-15
Status: Present
```

---

## Future Improvements

- Authentication (Login / JWT)
- Edit employee feature
- Attendance dashboard
- Monthly attendance report
- Pagination

---

## Author

Imran Pathan  
Python Backend Developer