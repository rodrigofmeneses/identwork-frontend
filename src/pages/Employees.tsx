import { Table } from '../components/Table'

export const Employees = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search" required />
        <button>Search</button>
        <button>Add Employee</button>
      </div>
      <div>
        <Table title="Employees"></Table>
      </div>
    </div>
  )
}
