import { createContext, useState } from 'react'

export interface iProviderProps {
    children: React.ReactNode
}

interface iModalContextProps {
    modalIsOpen: (boolean | undefined)[]
    setModalIsOpen: React.Dispatch<React.SetStateAction<(boolean | undefined)[]>>
    handleModal: (contactId: number) => void
    handleModalDeleteAccount: () => void
    modalIsOpenDeleteAccount: boolean
    setIsOpenDeleteAccount: React.Dispatch<React.SetStateAction<boolean>>
    handleModalCreateContact: () => void
    modalIsOpenCreateContact: boolean
    setIsOpenCreateContact: React.Dispatch<React.SetStateAction<boolean>>
    handleModalEditContact: (contactId: number) => void
    handleModalProfileClient: () => void
    modalIsOpenEditContact: (boolean | undefined)[]
    setIsOpenEditContact: React.Dispatch<React.SetStateAction<(boolean | undefined)[]>>
    modalIsOpenProfileClient: boolean
    setIsOpenProfileClient: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext({} as iModalContextProps)

export const ModalProvider = ({ children }: iProviderProps) => {
    const [modalIsOpen, setModalIsOpen] = useState<Array<boolean | undefined>>([])
    const [modalIsOpenDeleteAccount, setIsOpenDeleteAccount] = useState(false)
    const [modalIsOpenCreateContact, setIsOpenCreateContact] = useState(false)
    // const [modalIsOpenEditContact, setIsOpenEditContact] = useState(false)
    const [modalIsOpenEditContact, setIsOpenEditContact] = useState<Array<boolean | undefined>>([])
    const [modalIsOpenProfileClient, setIsOpenProfileClient] = useState(false)

    const handleModalProfileClient = () => {
        if (!modalIsOpenProfileClient) {
            setIsOpenProfileClient(true)
        } else {
            setIsOpenProfileClient(false)
        }
    }

    const handleModal = (contactId: number) => {
        setModalIsOpen((prevModalIsOpen) => {
            const updatedModalIsOpen = [...prevModalIsOpen]
            updatedModalIsOpen[contactId] = !updatedModalIsOpen[contactId]
            return updatedModalIsOpen
        })
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

    const handleModalEditContact = (contactId: number) => {
        setIsOpenEditContact((prevModalIsOpen) => {
            const updatedModalIsOpen = [...prevModalIsOpen]
            updatedModalIsOpen[contactId] = !updatedModalIsOpen[contactId]
            return updatedModalIsOpen
        })
    }

    return (
        <ModalContext.Provider
            value={{
                modalIsOpen,
                setModalIsOpen,
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
                setIsOpenProfileClient,
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}
