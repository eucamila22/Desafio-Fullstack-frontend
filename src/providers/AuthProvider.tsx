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
    formRegister: (formData: iRegisterFormValues) => void
    clientId: iAuthContextType | null
}

export const AuthContext = createContext<iAuthContextValues>({} as iAuthContextValues)

export const AuthProvider = ({ children }: iAuthProviderProps) => {
    const navigate = useNavigate()
    const [clientId, setClientId] = useState<iAuthContextType | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('your-personal-schedule:token')

        if (!token) {
            setLoading(false)
            return
        }

        api.defaults.headers.common.authorization = `Bearer ${token}`
        setLoading(false)
    }, [])

    const singIn = async (data: iLogin) => {
        try {
            const res = await api.post('/login', data)
            const { token } = res.data

            const tokenParts = token.split('.')
            const tokenBody = JSON.parse(atob(tokenParts[1]))

            const id = tokenBody.id

            console.log(id)

            api.defaults.headers.common.authorization = `Bearer ${token}`
            localStorage.setItem('your-personal-schedule:token', token)
            localStorage.setItem('IDClient:ID', id)

            setClientId(id)
            navigate('/dashboard')
        } catch (error) {
            console.error(error)
        }
    }

    const formRegister = async (formData: iRegisterFormValues) => {
        try {
            setLoading(true)
            const res = await api.post('/clients', formData)
            console.log(res.data)

            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <AuthContext.Provider value={{ singIn, loading, formRegister, clientId }}>
            {children}
        </AuthContext.Provider>
    )
}
