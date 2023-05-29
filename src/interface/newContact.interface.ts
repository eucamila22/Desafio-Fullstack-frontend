import { z } from 'zod'
import { newContactSchema } from '../schema/newContact.schema'


export type iRegisterNewContact = z.infer<typeof newContactSchema>
