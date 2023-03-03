import style from './Button.module.scss'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
  children?: React.ReactNode
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={style.myButton}
    >
      {props.children}
    </button>
  )
}
