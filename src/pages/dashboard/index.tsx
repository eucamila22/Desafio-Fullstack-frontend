import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const Dashboard = () => {
    const { client, handleLogout, contacts } = useAuth()

    return (
        <>
            <h2>Dash</h2>
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
                        <li key={elem.client.id}>
                            <p>Id: {elem.client.id}</p>
                            <p>Name: {elem.client.full_name}</p>
                            <p>Phone: {elem.client.phone}</p>
                            <p>E-mail: {elem.client.email}</p>
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
