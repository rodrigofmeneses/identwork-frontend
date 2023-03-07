import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Table } from '../components'
import { IEmployee } from '../types/employee'
import style from './styles/Employees.module.scss'
import routerStyle from './styles/Router.module.scss'

export default function Employees() {
  const navigate = useNavigate()

  const [header, setHeader] = useState(['ID', 'Name', 'Company', 'Actions'])
  const [employees, setEmployees] = useState<IEmployee[]>([
    {
      id: '123456',
      name: 'Marta linda',
      company: 'Maré',
    },
    {
      id: '654321',
      name: 'Rodrigo linda',
      company: 'abc',
    },
  ])

  return (
    <div className={routerStyle.routerContainer}>
      <div className={style.topContainer}>
        <div>
          <div className={style.wrapper}>
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search" required />
            <Button>Search</Button>
          </div>
        </div>
        <div>
          <Button onClick={() => navigate('/add-employee')}>
            Add Employee
          </Button>
        </div>
      </div>
      <div className={style.tableContainer}>
        <Table
          title="Employees"
          // checkbox={true}
          header={header}
          content={employees}
          onDelete={async id => {}}
        ></Table>
      </div>
    </div>
  )
}
