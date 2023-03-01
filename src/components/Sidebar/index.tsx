import style from './Sidebar.module.scss'

interface Props {
  title?: string
}

export const Sidebar = (props: Props) => {
  return (
    <div className={style.sidebarContainer}>
      <a href="/employees">Employees</a>
      <a href="/">Companies</a>
    </div>
  )
}
