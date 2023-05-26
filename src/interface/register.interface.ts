import { z } from 'zod'
import { registerSchema } from '../schema/register.Schema'


export type iRegister = z.infer<typeof registerSchema>
