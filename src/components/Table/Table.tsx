import { Button } from '../Button/Button'

interface Props {
  title?: string
}

export const Table = (props: Props) => {
  const employees = [
    {
      id: 123456,
      name: 'Marta linda',
      company: 'Maré',
    },
    {
      id: 654321,
      name: 'Rodrigo linda',
      company: 'Maré',
    },
  ]
  return (
    <div>
      <header>
        <input type="text" placeholder="Search" required />
        <Button>Add Employee</Button>
      </header>
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Company</th>
          </tr>
          {employees.map(employee => (
            <tr>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.company}</td>
            </tr>
          ))}
        </table>
      </div>
      <footer>Pagination</footer>
    </div>
  )
}
