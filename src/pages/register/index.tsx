import { useForm } from 'react-hook-form'

const Register = () => {
    // const {  } = useAuth()
    const { register, handleSubmit } = useForm()

    return (
        <main>
            <h2>Register</h2>

            <form>
                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' {...register('')} />

                <label htmlFor='password'>Password</label>
                <input type='password' id='password' {...register('pasword')} />

                <button type='submit'>Login</button>

                <p>Already have registration?</p>
                <button type='submit'>Login here</button>
            </form>
        </main>
    )
}

export default Register
