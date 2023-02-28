import { Button } from '../Button/Button'
import style from './Navbar.module.scss'

interface Props {
  title: string
}

export const Navbar = (props: Props) => {
  return (
    <nav className={style.navbarContainer}>
      <h1>{props.title}</h1>
      <Button>Maravilhosa</Button>
    </nav>
  )
}
