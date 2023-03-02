import { Buildings, IdentificationCard } from 'phosphor-react'
import style from './Sidebar.module.scss'

interface Props {
  title?: string
}

export const Sidebar = (props: Props) => {
  return (
    <div className={style.sidebarContainer}>
      <a href="/employees">
        <IdentificationCard size={40} />
      </a>
      <a href="/">
        <Buildings size={40} />
      </a>
    </div>
  )
}
