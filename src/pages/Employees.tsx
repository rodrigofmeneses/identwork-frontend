import { Table } from '../components/Table'
import style from './styles/Employees.module.scss'

export const Employees = () => {
  return (
    <div className={style.employeesContainer}>
      <div className={style.topContainer}>
        <div>
          <input type="text" placeholder="Search" required />
          <button>Search</button>
        </div>
        <div>
          <button>Add Employee</button>
        </div>
      </div>
      <div className={style.tableContainer}>
        <Table title="Employees"></Table>
      </div>
    </div>
  )
}
