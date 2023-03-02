import style from './Table.module.scss'

interface Props {
  title: string
}

export const Table = (props: Props) => {
  const header = ['ID', 'Name', 'Company']

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
    <div className={style.mainContainer}>
      <header>{props.title}</header>
      <table>
        <tr>
          {header.map(item => (
            <th>{item}</th>
          ))}
        </tr>
        {employees.map(employee => (
          <tr>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.company}</td>
          </tr>
        ))}
      </table>
      <footer>
        <div className={style.pagination}>
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#" className={style.active}>
            3
          </a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>
      </footer>
    </div>
  )
}
