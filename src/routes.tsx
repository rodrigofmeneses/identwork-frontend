import { createBrowserRouter } from 'react-router-dom'
import { AddCompany, AddEmployee, Companies, Employees } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>IdentWork</h1>,
  },
  {
    path: '/employees',
    element: <Employees />,
  },
  {
    path: '/add-employee',
    element: <AddEmployee />,
  },
  {
    path: '/companies',
    element: <Companies />,
  },
  {
    path: '/add-company',
    element: <AddCompany />,
  },
])
