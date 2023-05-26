import { z } from 'zod'

export const registerSchema = z.object({
    name: z.string(),
    email: z.string().email('Enter a valid email'),
    phone: z.string(),
    password: z.string().nonempty('Enter a password'),
})
