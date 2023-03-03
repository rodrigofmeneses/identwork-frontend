import { createBrowserRouter } from 'react-router-dom'
import { AddEmployee, Companies, Employees } from './pages'

export const router = createBrowserRouter([
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
])
