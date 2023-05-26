import { useEffect, useState } from 'react'
import { api } from '../../services/api'
// import { api } from '../../services/api'

interface iClient {
    id: string
    name: string
    email: string
    phone: string
}
const Dashboard = () => {
    const [client, setClient] = useState<iClient>()

    useEffect(() => {
        const fetchClientData = async () => {
            const id = localStorage.getItem('IDClient:ID')
            if (id) {
                try {
                    const res = await api.get<iClient>(`clients/${id}`)
                    setClient(res.data)
                } catch (error) {
                    console.log('Error getting customer data:', error)
                }
            }
        }

        fetchClientData()
    }, [])

    return (
        <>
            <h2>Dash</h2>
            {client ? (
                <li key={client.id}>
                    <p>Id: {client.id}</p>
                    <p>Name: {client.name}</p>
                    <p>Phone: {client.phone}</p>
                    <p>E-mail: {client.email}</p>
                </li>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default Dashboard
