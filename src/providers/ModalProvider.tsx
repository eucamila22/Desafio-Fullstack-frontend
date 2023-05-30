import { createContext, useState } from 'react'

export interface iProviderProps {
    children: React.ReactNode
}

interface iModalContextProps {
    modalIsOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    handleModal: (id: string) => void
    handleModalDeleteAccount: () => void
    modalIsOpenDeleteAccount: boolean
    setIsOpenDeleteAccount: React.Dispatch<React.SetStateAction<boolean>>
    handleModalCreateContact: () => void
    modalIsOpenCreateContact: boolean
    setIsOpenCreateContact: React.Dispatch<React.SetStateAction<boolean>>
    handleModalEditContact: () => void
    handleModalProfileClient: () => void
    modalIsOpenEditContact: boolean
    setIsOpenEditContact: React.Dispatch<React.SetStateAction<boolean>>
    modalIsOpenProfileClient: boolean
    setIsOpenProfileClient: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext({} as iModalContextProps)

export const ModalProvider = ({ children }: iProviderProps) => {
    const [modalIsOpen, setIsOpen] = useState(false)
    const [modalIsOpenDeleteAccount, setIsOpenDeleteAccount] = useState(false)
    const [modalIsOpenCreateContact, setIsOpenCreateContact] = useState(false)
    const [modalIsOpenEditContact, setIsOpenEditContact] = useState(false)
    const [modalIsOpenProfileClient, setIsOpenProfileClient] = useState(false)

    const handleModalProfileClient = () => {
        if (!modalIsOpenProfileClient) {
            setIsOpenProfileClient(true)
        } else {
            setIsOpenProfileClient(false)
        }
    }

    const handleModal = (id: string) => {
        if (!modalIsOpen) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    const handleModalDeleteAccount = () => {
        if (!modalIsOpenDeleteAccount) {
            setIsOpenDeleteAccount(true)
        } else {
            setIsOpenDeleteAccount(false)
        }
    }

    const handleModalCreateContact = () => {
        if (!modalIsOpenCreateContact) {
            setIsOpenCreateContact(true)
        } else {
            setIsOpenCreateContact(false)
        }
    }

    const handleModalEditContact = () => {
        if (!modalIsOpenEditContact) {
            setIsOpenEditContact(true)
        } else {
            setIsOpenEditContact(false)
        }
    }

    return (
        <ModalContext.Provider
            value={{
                modalIsOpen,
                setIsOpen,
                handleModal,
                handleModalDeleteAccount,
                modalIsOpenDeleteAccount,
                setIsOpenDeleteAccount,
                handleModalCreateContact,
                modalIsOpenCreateContact,
                setIsOpenCreateContact,
                modalIsOpenEditContact,
                setIsOpenEditContact,
                handleModalEditContact,
                handleModalProfileClient,
                modalIsOpenProfileClient,
                setIsOpenProfileClient
                
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}
