import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useContact from '../../hooks/useContact'
import { useForm } from 'react-hook-form'
import { iRegisterFormNewContactValues } from '../../providers/ContactProvider'
import ModalAuth from '../../hooks/useModal'
import { ModalDefault } from '../../components/modalDefault'

const Dashboard = () => {
    const { client, handleLogout, deleteClient } = useAuth()
    const {
        handleModal,
        modalIsOpen,
        handleModalDeleteAccount,
        modalIsOpenDeleteAccount,
        handleModalCreateContact,
        modalIsOpenCreateContact,
        setIsOpenCreateContact,
        handleModalEditContact,
        modalIsOpenEditContact,
        handleModalProfileClient,
        modalIsOpenProfileClient,
    } = ModalAuth()
    const {
        contacts,
        editingContact,
        setEditingContact,
        handleDeleteContact,
        handleEditContact,
        handleCreateContact,
    } = useContact()
    const { register, handleSubmit, reset } = useForm<iRegisterFormNewContactValues>()

    const newContact = (data: iRegisterFormNewContactValues) => {
        handleCreateContact(data)
        reset()
        setIsOpenCreateContact(false)
    }

    const editContact = () => {
        handleEditContact()
        reset()
    }

    return (
        <>
            <h2>Hello, {client?.name}!</h2>

            <button onClick={() => handleModalProfileClient()}>Profile</button>
            {modalIsOpenProfileClient && (
                <ModalDefault callback={() => handleModalProfileClient()} maxWidth={500}>
                    {client ? (
                        <ul>
                            <li key={client.id}>
                                <p>Name: {client.name}</p>
                                <p>Phone: {client.phone}</p>
                                <p>E-mail: {client.email}</p>
                            </li>
                        </ul>
                    ) : (
                        <p>Loading...</p>
                    )}
                    <button onClick={() => handleModalDeleteAccount()}>Delete Account</button>
                    {modalIsOpenDeleteAccount && (
                        <ModalDefault callback={() => handleModalDeleteAccount()} maxWidth={500}>
                            <button onClick={deleteClient}>Yes, I'm sure!</button>
                            <button onClick={() => handleModalDeleteAccount()}>Cancel</button>
                        </ModalDefault>
                    )}
                </ModalDefault>
            )}

            <Link to='/' onClick={handleLogout}>
                Sair
            </Link>

            <h2>Contacts</h2>
            <button onClick={() => handleModalCreateContact()}>Add A New Contact</button>
            {modalIsOpenCreateContact && (
                <ModalDefault callback={() => handleModalCreateContact()} maxWidth={500}>
                    <form onSubmit={handleSubmit(newContact)}>
                        <label htmlFor='full_name'>Full Name</label>
                        <input type='text' id='full_name' {...register('full_name')} />

                        <label htmlFor='email'>E-mail</label>
                        <input type='email' id='email' {...register('email')} />

                        <label htmlFor='phone'>Phone</label>
                        <input type='text' id='phone' {...register('phone')} />

                        <button type='submit'>Save</button>
                        <button type='button' onClick={() => handleModalCreateContact()}>
                            Cancel
                        </button>
                    </form>
                </ModalDefault>
            )}
            {contacts.length > 0 ? (
                <ul>
                    {contacts.map((elem) => (
                        <li key={elem.id}>
                            <p>Id: {elem.id}</p>
                            <p>Name: {elem.full_name}</p>
                            <p>Phone: {elem.phone}</p>
                            <p>E-mail: {elem.email}</p>

                            <button onClick={() => handleModal(elem.id)}>Delete</button>
                            {modalIsOpen && (
                                <ModalDefault callback={() => handleModal} maxWidth={500}>
                                    <button onClick={() => handleDeleteContact(elem.id)}>
                                        Yes, I'm sure!
                                    </button>
                                    <button onClick={() => handleModal(elem.id)}>Cancel</button>
                                </ModalDefault>
                            )}

                            <button onClick={() => handleModalEditContact()}>Edit</button>
                            {modalIsOpenEditContact && (
                                <ModalDefault
                                    callback={() => handleModalEditContact()}
                                    maxWidth={500}
                                >
                                    {editingContact && editingContact.id === elem.id && (
                                        <form key={elem.id} onSubmit={handleSubmit(editContact)}>
                                            <input
                                                type='text'
                                                value={editingContact.full_name}
                                                onChange={(e) =>
                                                    setEditingContact({
                                                        ...editingContact,
                                                        full_name: e.target.value,
                                                    })
                                                }
                                            />
                                            <input
                                                type='text'
                                                value={editingContact.email}
                                                onChange={(e) =>
                                                    setEditingContact({
                                                        ...editingContact,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />
                                            <input
                                                type='text'
                                                value={editingContact.phone}
                                                onChange={(e) =>
                                                    setEditingContact({
                                                        ...editingContact,
                                                        phone: e.target.value,
                                                    })
                                                }
                                            />
                                            <button type='submit'>Save</button>
                                        </form>
                                    )}
                                    <button onClick={() => setEditingContact(elem)}>Edit</button>
                                </ModalDefault>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>You still don't have contacts, let's add them?</p>
            )}
        </>
    )
}

export default Dashboard
