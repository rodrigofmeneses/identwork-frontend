import { useNavigate } from 'react-router-dom'
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
            <button>Search</button>
          </div>
        </div>
        <div>
          <button onClick={() => navigate('/add-employee')}>
            Add Employee
          </button>
        </div>
      </div>
      <div className={style.tableContainer}>
        <Table title="Employees"></Table>
      </div>
    </div>
  )
}
