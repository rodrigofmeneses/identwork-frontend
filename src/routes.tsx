import { createBrowserRouter } from 'react-router-dom'
import { AddEmployee } from './pages/AddEmployee'
import { Employees } from './pages/Employees'

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
