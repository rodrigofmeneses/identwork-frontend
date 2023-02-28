import { Button } from '../Button/Button'
import style from './Sidebar.module.scss'

interface Props {
  title?: string
}

export const Sidebar = (props: Props) => {
  return (
    <aside className={style.sidebarContainer}>
      <Button>Employees</Button>
      <Button>Companies</Button>
    </aside>
  )
}
