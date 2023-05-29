import { useContext } from 'react'
import { ContactContext } from '../providers/ContactProvider'

const ContactAuth = () => {
    const contactContext = useContext(ContactContext)

    return contactContext
}

export default ContactAuth
