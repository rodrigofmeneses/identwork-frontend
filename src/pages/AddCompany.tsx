import { useForm } from 'react-hook-form'
import { Button } from '../components'
import style from './styles/AddCompany.module.scss'
import routerStyle from './styles/Router.module.scss'

export default function AddCompany() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data: any) => console.log(data)

  return (
    <div className={routerStyle.routerContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <h1>Add Company</h1>
        <div className={style.itemContainer}>
          <label>Name</label>
          <input {...register('name', { required: true })} />
        </div>
        {errors.name && <span>This field is required</span>}
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  )
}
