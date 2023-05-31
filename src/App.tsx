import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './providers/AuthProvider'
import { ContactProvider } from './providers/ContactProvider'
import RoutesMain from './routes'
import GlobalStyle from './styles/GlobalStyle'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <AuthProvider>
                <ContactProvider>
                    <RoutesMain />
                </ContactProvider>
            </AuthProvider>

            <ToastContainer
                position='bottom-right'
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </>
    )
}

export default App
