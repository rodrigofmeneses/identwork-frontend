import { createBrowserRouter } from 'react-router-dom'
import { Employees } from './pages/Employees'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home Page</div>,
  },
  {
    path: '/employee',
    element: <Employees />,
  },
])
