import { SubmitHandler, useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../../schema/register.Schema'
import { iRegister } from '../../interface/register.interface'

export interface iRegisterFormValues {
    name: string
    email: string
    phone: string
    password: string
}

const Register = () => {
    const { formRegister } = useAuth()
    const { register, handleSubmit } = useForm<iRegister>({
        resolver: zodResolver(registerSchema),
    })

    const onSubmit: SubmitHandler<iRegisterFormValues> = async (formData) => {
        formRegister(formData)
    }

    return (
        <main>
            <h2>Register</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' {...register('name')} />

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' {...register('email')} />

                <label htmlFor='phone'>Phone</label>
                <input type='text' id='phone' {...register('phone')} />

                <label htmlFor='password'>Password</label>
                <input type='password' id='password' {...register('password')} />

                <button type='submit'>Register</button>
            </form>
        </main>
    )
}

export default Register
