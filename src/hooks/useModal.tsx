import { useContext } from 'react'
import { ModalContext } from '../providers/ModalProvider'

const ModalAuth = () => {
    const modalContext = useContext(ModalContext)

    return modalContext
}

export default ModalAuth
