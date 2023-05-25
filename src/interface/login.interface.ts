import { z } from 'zod'
import { loginSchema } from '../schema/login.schema'

export type iLogin = z.infer<typeof loginSchema>
