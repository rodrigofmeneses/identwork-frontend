import { useForm } from 'react-hook-form'
import { Button } from '../components/Button'
import style from './styles/AddEmployee.module.scss'
import routerStyle from './styles/Router.module.scss'

export const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <div className={routerStyle.routerContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.itemContainer}>
          <label>ID</label>
          <input {...register('id', { required: true })} />
        </div>
        <div className={style.itemContainer}>
          <label>Name</label>
          <input {...register('name', { required: true })} />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <div className={style.itemContainer}>
          <label>Company</label>
          <input {...register('name', { required: true })} />
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  )
}
