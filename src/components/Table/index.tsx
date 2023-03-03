import { Pencil, Trash } from 'phosphor-react'
import Checkbox from '../Checkbox'
import style from './Table.module.scss'
import { IEmployee } from '../../types/employee'
import { ICompany } from '../../types/company'

interface TableProps<T> {
  title: string
  checkbox?: boolean
  edit?: boolean
  header: string[]
  content: T[]
}

export default function Table(props: TableProps<IEmployee | ICompany>) {
  return (
    <div className={style.mainContainer}>
      <header>{props.title}</header>
      <table>
        <tr>
          {props.checkbox && <Checkbox />}
          {props.header.map(item => (
            <th>{item}</th>
          ))}
        </tr>
        {props.content.map(item => (
          <tr>
            {props.checkbox && <Checkbox />}
            {Object.values(item).map(value => (
              <td>{value}</td>
            ))}
            <td className={style.actions}>
              <Pencil size={24} style={{ cursor: 'pointer' }} />
              <Trash
                size={24}
                className={style.trash}
                style={{ cursor: 'pointer' }}
              />
            </td>
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
