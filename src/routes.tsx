import { createBrowserRouter } from 'react-router-dom'
import { AddEmployee, Employees } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home Page</div>,
  },
  {
    path: '/employees',
    element: <Employees />,
  },
  {
    path: '/add-employee',
    element: <AddEmployee />,
  },
])
