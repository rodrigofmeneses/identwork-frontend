import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { Table } from '../components/Table'
import style from './styles/Employees.module.scss'
import routerStyle from './styles/Router.module.scss'

export const Employees = () => {
  const navigate = useNavigate()

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
        <Table title="Employees"></Table>
      </div>
      <Button>Olá</Button>
    </div>
  )
}
