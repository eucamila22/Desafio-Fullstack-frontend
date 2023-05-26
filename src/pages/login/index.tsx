import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../../schema/login.schema'
import { iLogin } from '../../interface/login.interface'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const Login = () => {
    const { singIn } = useAuth()
    const { register, handleSubmit } = useForm<iLogin>({
        resolver: zodResolver(loginSchema),
    })

    return (
        <main>
            <h2>Login</h2>

            <form onSubmit={handleSubmit(singIn)}>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' {...register('email')} />

                <label htmlFor='password'>Password</label>
                <input type='password' id='password' {...register('password')} />

                <button type='submit'>Login</button>

                <p>You are not registered?</p>
                {/* <button type='submit'>Register here</button> */}
                <Link to={'/register'}>Register here</Link>
            </form>
        </main>
    )
}

export default Login
