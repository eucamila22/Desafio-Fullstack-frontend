import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { loginSchema } from '../../schema/login.schema'
import { iLogin } from '../../interface/login.interface'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { LoginContainer } from './style'
import imageLogin from '../../assets/8810413.jpg'

const Login = () => {
    const { singIn } = useAuth()
    const { register, handleSubmit } = useForm<iLogin>({
        resolver: zodResolver(loginSchema),
    })

    return (
        <LoginContainer>
            <div>
                <img src={imageLogin} alt='' />
            </div>

            <form onSubmit={handleSubmit(singIn)}>
                <h2>Login</h2>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' {...register('email')} />
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' {...register('password')} />

                <button type='submit'>Login</button>

                <p>You are not registered?</p>
                <Link to={'/register'}>Register here</Link>
            </form>
        </LoginContainer>
    )
}

export default Login
