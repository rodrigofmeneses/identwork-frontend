import { Buildings, IdentificationCard } from 'phosphor-react'
import style from './Sidebar.module.scss'

export default function Sidebar() {
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
