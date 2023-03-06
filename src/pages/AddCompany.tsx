import axios, { AxiosError } from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components'
import Modal from '../components/Modal'
import { ICompany } from '../types/company'
import style from './styles/AddCompany.module.scss'
import routerStyle from './styles/Router.module.scss'

export default function AddCompany() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [modalIsOpen, setIsOpen] = useState<boolean>(false)
  const [modalMessage, setModalMessage] = useState<string>('')

  const navigate = useNavigate()

  const onSubmit = async (data: FieldValues | ICompany) => {
    try {
      await axios.post('http://localhost:7777/companies/', data)
      navigate('/companies')
    } catch (e) {
      if (e instanceof AxiosError) {
        setModalMessage(e.response?.data.message)
      } else {
        setModalMessage('Invalid Form')
      }
      setIsOpen(true)
    }
  }
  return (
    <div className={routerStyle.routerContainer}>
      {modalIsOpen && (
        <Modal
          message={modalMessage}
          isOpen={modalIsOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
      <form className={style.form}>
        <h1>Add Company</h1>
        <div className={style.itemContainer}>
          <label>Name</label>
          <input
            {...register('name', {
              required: true,
            })}
          />
        </div>
        {errors.name && <span>This field is required</span>}
        <Button onClick={handleSubmit(onSubmit)}>Create Company</Button>
      </form>
    </div>
  )
}
