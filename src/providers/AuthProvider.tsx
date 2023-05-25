import { ReactNode, createContext } from 'react'
import { iLogin } from '../interface/login.interface'
import { api } from '../services/api'
import { useNavigate } from 'react-router-dom'

interface iAuthProviderProps {
    children: ReactNode
}

interface iAuthContextValues {
    singIn: (data: iLogin) => void
}

export const AuthContext = createContext<iAuthContextValues>({} as iAuthContextValues)

export const AuthProvider = ({ children }: iAuthProviderProps) => {
    const navigate = useNavigate()

    const singIn = async (data: iLogin) => {
        try {
            const res = await api.post('/login', data)
            const { token } = res.data

            api.defaults.headers.common.authorization = `Bearer ${token}`
            localStorage.setItem('your-personal-schedule', token)

            navigate('/dashboard')
        } catch (error) {
            console.error(error)
        }
    }

    return <AuthContext.Provider value={{ singIn }}>{children}</AuthContext.Provider>
}
