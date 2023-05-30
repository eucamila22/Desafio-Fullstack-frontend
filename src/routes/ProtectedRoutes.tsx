import { Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const ProtectedRoutes = () => {
    const { loading } = useAuth()

    if (loading) {
        return <div>Loading...</div>
    }

    return <Outlet />
}
