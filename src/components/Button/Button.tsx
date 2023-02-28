interface Props {
  children?: React.ReactNode
}

export const Button = (props: Props) => {
  return <button>{props.children}</button>
}
