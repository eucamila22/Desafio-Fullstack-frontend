import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../../schema/login.schema'
import { iLogin } from '../../interface/login.interface'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const FormLogin = () => {
    const { singIn } = useAuth()
    const { register, handleSubmit } = useForm<iLogin>({
        resolver: zodResolver(loginSchema),
    })
    return (
        <form onSubmit={handleSubmit(singIn)}>
            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' {...register('email')} />

            <label htmlFor='password'>Password</label>
            <input type='password' id='password' {...register('password')} />

            <button type='submit'>Login</button>
            <div>
                <p>You are not registered?</p>
                <Link to={'/register'}>Register here</Link>
            </div>
        </form>
    )
}

export default FormLogin
