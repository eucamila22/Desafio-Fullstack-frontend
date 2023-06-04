import { ReactNode, createContext, useEffect, useState } from 'react'
import { iLogin } from '../interface/login.interface'
import { api } from '../services/api'
import { useNavigate } from 'react-router-dom'
import { iRegisterFormValues } from '../components/form/formRegister'
import { toast } from 'react-toastify'
// import PDFDocument from 'pdfkit';

interface iAuthProviderProps {
    children: ReactNode
}

interface iAuthContextType {
    clientId: string | null
    setClientId: (clientId: string | null) => void
}

interface iAuthContextValues {
    singIn: (data: iLogin) => void
    loading: boolean
    clientLoaded: boolean
    formRegister: (formData: iRegisterFormValues) => void
    clientId: iAuthContextType | null
    client: iClient | undefined
    handleLogout: () => void
    deleteClient: () => Promise<void>
    // download: () => Promise<void>
}

export interface iClient {
    id: number
    name: string
    email: string
    phone: string
    contacts: iContacts[]
}
export interface iContacts {
    client: iClient
    id: string
    full_name: string
    email: string
    phone: string
}

export const AuthContext = createContext<iAuthContextValues>({} as iAuthContextValues)

export const AuthProvider = ({ children }: iAuthProviderProps) => {
    const navigate = useNavigate()
    const [clientId, setClientId] = useState<iAuthContextType | null>(null)
    const [client, setClient] = useState<iClient>()
    const [loading, setLoading] = useState(true)
    const [clientLoaded, setClientLoaded] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('your-personal-schedule:token')

        if (!token) {
            setLoading(false)
            return
        }

        api.defaults.headers.common.authorization = `Bearer ${token}`
        setLoading(false)
    }, [])

    useEffect(() => {
        const fetchClientData = async () => {
            const id = localStorage.getItem('IDClient:ID')
            if (id) {
                try {
                    const res = await api.get<iClient>(`clients/${id}`)
                    setClient(res.data)
                } catch (error) {
                    console.log('Error getting customer data:', error)
                }
            }
        }

        fetchClientData()
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('your-personal-schedule:token')
        localStorage.removeItem('IDClient:ID')
    }

    const singIn = async (data: iLogin) => {
        try {
            const res = await api.post('/login', data)
            const { token } = res.data

            const tokenParts = token.split('.')
            const tokenBody = JSON.parse(atob(tokenParts[1]))

            const id = tokenBody.id

            api.defaults.headers.common.authorization = `Bearer ${token}`
            localStorage.setItem('your-personal-schedule:token', token)
            localStorage.setItem('IDClient:ID', id)

            setClientLoaded(true)
            setClientId(id)
            toast.success('Login successful!')
            navigate('/dashboard')
        } catch (error) {
            toast.error('There was an error!')
            console.error(error)
        }
    }

    const formRegister = async (formData: iRegisterFormValues) => {
        try {
            setLoading(true)
            const res = await api.post('/clients', formData)
            toast.success('Registration successful!')
            navigate('/')
            return res
        } catch (error) {
            toast.error('There was an error!')
            console.error(error)
        }
    }

    const deleteClient = async () => {
        try {
            const id = localStorage.getItem('IDClient:ID')
            const token = localStorage.getItem('your-personal-schedule:token')

            await api.delete(`/clients/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            handleLogout()
            navigate('/')
        } catch (error) {
            toast.error('There was an error!')
            console.error(error)
        }
    }

    // const download = async () => {
    //   const id = localStorage.getItem('IDClient:ID');
    //   const token = localStorage.getItem('your-personal-schedule:token');

    //   if (!token || !id) {
    //     console.error('Usuário não autenticado.');
    //     return;
    //   }

    //   try {
    //     const response = await api.get(`/report/${id}`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });

    //     const data = response.data;

    //     const doc = new PDFDocument();
    //     // Gerar o conteúdo do PDF usando o PDFKit e os dados da resposta da API
    //     doc.text(`Name: ${data.name}`);
    //     doc.text(`Email: ${data.email}`);

    //     // Criar um buffer para armazenar o PDF
    //     const buffers: Buffer[] = [];
    //     doc.on('data', (buffer) => buffers.push(buffer));
    //     doc.end();

    //     const pdfBuffer = Buffer.concat(buffers);

    //     // Criar um objeto Blob a partir do buffer do PDF
    //     const blob = new Blob([pdfBuffer], { type: 'application/pdf' });

    //     // Criar a URL do objeto Blob
    //     const url = URL.createObjectURL(blob);

    //     // Criar um link para o download do PDF
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.download = 'documento.pdf';
    //     link.target = '_blank';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //   } catch (error) {
    //     console.error('Erro ao gerar o PDF:', error);
    //   }
    // };

    return (
        <AuthContext.Provider
            value={{
                singIn,
                loading,
                formRegister,
                clientId,
                client,
                handleLogout,
                clientLoaded,
                deleteClient,
                // download
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
