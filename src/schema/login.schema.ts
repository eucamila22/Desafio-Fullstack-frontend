import { z } from 'zod'

export const loginSchema = z.object({
    email: z.string().email('Enter a valid email'),
    password: z.string().nonempty('Enter a password'),
})