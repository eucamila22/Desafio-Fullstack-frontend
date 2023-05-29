import { ReactNode, createContext, useEffect, useState } from 'react'
import { iLogin } from '../interface/login.interface'
import { api } from '../services/api'
import { useNavigate } from 'react-router-dom'
import { iRegisterFormValues } from '../pages/register'

interface iAuthProviderProps {
    children: ReactNode
}

interface iAuthContextType {
    clientId: string | null
    setClientId: (clientId: string | null) => void
}

interface iAuthContextValues {
    singIn: (data: iLogin) => void
    loading: boolean
    clientLoaded: boolean
    formRegister: (formData: iRegisterFormValues) => void
    clientId: iAuthContextType | null
    client: iClient | undefined
    handleLogout: () => void
    deleteClient: () => Promise<void>
}

export interface iClient {
    id: string
    name: string
    email: string
    phone: string
    contacts: iContacts[]
}
export interface iContacts {
    client: string
    id: string
    full_name: string
    email: string
    phone: string
}

export const AuthContext = createContext<iAuthContextValues>({} as iAuthContextValues)

export const AuthProvider = ({ children }: iAuthProviderProps) => {
    const navigate = useNavigate()
    const [clientId, setClientId] = useState<iAuthContextType | null>(null)
    const [client, setClient] = useState<iClient>()
    const [loading, setLoading] = useState(true)
    const [clientLoaded, setClientLoaded] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('your-personal-schedule:token')

        if (!token) {
            setLoading(false)
            return
        }

        api.defaults.headers.common.authorization = `Bearer ${token}`
        setLoading(false)
    }, [])

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

    const handleLogout = () => {
        localStorage.removeItem('your-personal-schedule:token')
        localStorage.removeItem('IDClient:ID')
    }

    const singIn = async (data: iLogin) => {
        try {
            const res = await api.post('/login', data)
            const { token } = res.data

            const tokenParts = token.split('.')
            const tokenBody = JSON.parse(atob(tokenParts[1]))

            const id = tokenBody.id

            api.defaults.headers.common.authorization = `Bearer ${token}`
            localStorage.setItem('your-personal-schedule:token', token)
            localStorage.setItem('IDClient:ID', id)

            setClientId(id)
            setClientLoaded(true)

            navigate('/dashboard')
        } catch (error) {
            console.error(error)
        }
    }

    const formRegister = async (formData: iRegisterFormValues) => {
        try {
            setLoading(true)
            const res = await api.post('/clients', formData)
            navigate('/')
            return res
        } catch (error) {
            console.error(error)
        }
    }

    const deleteClient = async () => {
        try {
            const id = localStorage.getItem('IDClient:ID')
            const token = localStorage.getItem('your-personal-schedule:token')

            await api.delete(`/clients/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            handleLogout()
            navigate('/')
        } catch (error) {
            console.error('Error deleting client:', error)
        }
    }

    return (
        <AuthContext.Provider
            value={{
                singIn,
                loading,
                formRegister,
                clientId,
                client,
                handleLogout,
                clientLoaded,
                deleteClient,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
