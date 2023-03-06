import { useState } from 'react'
import Button from '../Button'
import style from './Modal.module.scss'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  message: string
}

export default function Modal(props: ModalProps) {
  const { isOpen, onClose, message } = props
  const [modalOpen, setModalOpen] = useState(isOpen)

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
            <Button onClick={handleCloseModal}>Close</Button>
          </div>
        </div>
      )}
    </>
  )
}
