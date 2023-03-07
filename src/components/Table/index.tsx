import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ICompany } from '../../types/company'
import { IEmployee } from '../../types/employee'
import Checkbox from '../Checkbox'
import Modal from '../Modal'
import Item from './Item'
import style from './Table.module.scss'

interface TableProps<T> {
  title: string
  checkbox?: boolean
  header: string[]
  content: T[]
  onDelete: (id: string) => Promise<void>
}

export default function Table(props: TableProps<IEmployee | ICompany>) {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)
  const [selectedResource, setSelectedResource] = useState<
    IEmployee | ICompany
  >({ id: '', name: '' })
  const navigate = useNavigate()

  const handleOnDelete = () => {
    props.onDelete(selectedResource.id)
    navigate(0)
  }

  return (
    <div className={style.mainContainer}>
      {modalIsOpen && (
        <Modal
          message={'Are you sure?'}
          isOpen={modalIsOpen}
          deleteButton={true}
          onDelete={handleOnDelete}
          onClose={() => setIsOpen(false)}
        />
      )}
      <header>{props.title}</header>
      <table>
        <tbody>
          <tr>
            {props.checkbox && <Checkbox />}
            {props.header.map(item => (
              <th key={item}>{item}</th>
            ))}
          </tr>
          {props.content.map(item => (
            <tr key={item.id}>
              <Item
                resource={item}
                checkbox={props.checkbox}
                setIsOpen={setIsOpen}
                setSelectedResource={setSelectedResource}
              />
            </tr>
          ))}
        </tbody>
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
