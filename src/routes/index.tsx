import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/dashboard'
import Login from '../pages/login'

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}

export default RoutesMain
