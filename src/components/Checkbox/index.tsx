interface CheckboxProps {
  label?: string
}

export function Checkbox(props: CheckboxProps) {
  const { label } = props
  return (
    <div className="checkbox-wrapper">
      <label>
        <input type="checkbox" />
        <span>{label}</span>
      </label>
    </div>
  )
}
export default Checkbox
