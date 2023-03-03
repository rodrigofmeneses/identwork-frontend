import { useForm } from 'react-hook-form'
import { Button } from '../components'
import style from './styles/AddEmployee.module.scss'
import routerStyle from './styles/Router.module.scss'

export default function AddEmployee() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <div className={routerStyle.routerContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <h1>Add Employee</h1>
        <div className={style.itemContainer}>
          <label>ID</label>
          <input {...register('id', { required: true })} />
        </div>
        {errors.id && <span>This field is required</span>}
        <div className={style.itemContainer}>
          <label>Name</label>
          <input {...register('name', { required: true })} />
        </div>
        {errors.name && <span>This field is required</span>}
        <div className={style.itemContainer}>
          <label>Company</label>
          <select
            {...register('company', { required: true })}
            placeholder="aew"
          >
            <option value="fabricio">Fabriciao</option>
            <option value="aew">AEWW</option>
          </select>
          {errors.company && <span>This field is required</span>}
        </div>
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  )
}
