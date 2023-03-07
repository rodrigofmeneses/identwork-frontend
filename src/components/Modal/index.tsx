import { useState } from 'react'
import Button from '../Button'
import style from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  message: string
  onClose: () => void
  onDelete?: () => void
  deleteButton?: boolean
}

export default function Modal(props: ModalProps) {
  const {
    isOpen,
    message,
    onClose,
    deleteButton = false,
    onDelete = () => {},
  } = props
  const [modalOpen, setModalOpen] = useState(isOpen)

  const handleDeleteItem = () => {
    setModalOpen(false)
    onDelete()
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    onClose()
  }

  return (
    <>
      {modalOpen && (
        <div className={style.modalOverlay}>
          <div className={style.modal}>
            <h1>{message}</h1>
            <div className={style.buttons}>
              {deleteButton && (
                <Button onClick={handleDeleteItem}>Delete</Button>
              )}
              <Button onClick={handleCloseModal}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
