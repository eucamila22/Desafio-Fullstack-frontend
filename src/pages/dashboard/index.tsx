import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useContact from '../../hooks/useContact'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { iRegisterFormNewContactValues } from '../../providers/ContactProvider'

const Dashboard = () => {
    const { client, handleLogout, deleteClient } = useAuth()
    const [creatingContact, setCreatingContact] = useState(false)
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
        setCreatingContact(false)
    }

    const editContact = () => {
        handleEditContact()
        reset()
    }

    return (
        <>
            <h2>Dash</h2>
            <button onClick={deleteClient}>DELETAR CONTA</button>
            {!creatingContact ? (
                <button onClick={() => setCreatingContact(true)}>Criar Contato</button>
            ) : (
                <form onSubmit={handleSubmit(newContact)}>
                    <label htmlFor='full_name'>Full Name</label>
                    <input type='text' id='full_name' {...register('full_name')} />

                    <label htmlFor='email'>E-mail</label>
                    <input type='email' id='email' {...register('email')} />

                    <label htmlFor='phone'>Phone</label>
                    <input type='text' id='phone' {...register('phone')} />

                    <button type='submit'>Salvar</button>
                    <button type='button' onClick={() => setCreatingContact(false)}>
                        Cancelar
                    </button>
                </form>
            )}

            {client ? (
                <ul>
                    <li key={client.id}>
                        <p>Id: {client.id}</p>
                        <p>Name: {client.name}</p>
                        <p>Phone: {client.phone}</p>
                        <p>E-mail: {client.email}</p>
                        <Link to='/' onClick={handleLogout}>
                            Sair
                        </Link>
                    </li>
                </ul>
            ) : (
                <p>Loading...</p>
            )}
            
            <h2>OUTRA PARTE</h2>
            {contacts.length > 0 ? (
                <ul>
                    {contacts.map((elem) => (
                        <li key={elem.id}>
                            <p>Id: {elem.id}</p>
                            <p>Name: {elem.full_name}</p>
                            <p>Phone: {elem.phone}</p>
                            <p>E-mail: {elem.email}</p>
                            <button onClick={() => handleDeleteContact(elem.id)}>Excluir</button>
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
                                    <button type='submit'>Salvar</button>
                                </form>
                            )}
                            <button onClick={() => setEditingContact(elem)}>Editar</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No contacts found.</p>
            )}
        </>
    )
}

export default Dashboard
