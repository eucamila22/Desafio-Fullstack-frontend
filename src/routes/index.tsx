import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Login from '../pages/login'
import Register from '../pages/register'
import { ProtectedRoutes } from './ProtectedRoutes'

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route element={<ProtectedRoutes />}>
                <Route path='/dashboard' element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default RoutesMain
