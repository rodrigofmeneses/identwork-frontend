import { Pencil, Trash } from 'phosphor-react'
import { ICompany } from '../../../types/company'
import { IEmployee } from '../../../types/employee'
import Checkbox from '../../Checkbox'
import style from './Item.module.scss'

interface ItemProps<T> {
  resource: T
  checkbox?: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedResource: React.Dispatch<React.SetStateAction<T>>
}

export default function Item(props: ItemProps<IEmployee | ICompany>) {
  return (
    <>
      {props.checkbox && <Checkbox />}
      {Object.values(props.resource).map((value, index) => (
        <td key={index}>{value}</td>
      ))}
      <td className={style.actions}>
        <Pencil size={24} style={{ cursor: 'pointer' }} />
        <Trash
          size={24}
          onClick={() => {
            props.setSelectedResource(props.resource)
            props.setIsOpen(true)
          }}
          style={{ cursor: 'pointer' }}
        />
      </td>
    </>
  )
}
