import { z } from 'zod'

export const newContactSchema = z.object({
    full_name: z.string(),
    email: z.string().email('Enter a valid email'),
    phone: z.string(),
})
