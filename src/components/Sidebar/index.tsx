import style from './Sidebar.module.scss'

interface Props {
  title?: string
}

export const Sidebar = (props: Props) => {
  return (
    <div className={style.sidebarContainer}>
      <a href="/employee">Employee</a>
      <a href="/">Company</a>
    </div>
  )
}
