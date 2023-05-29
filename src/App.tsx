import { AuthProvider } from './providers/AuthProvider'
import { ContactProvider } from './providers/ContactProvider'
import RoutesMain from './routes'
import GlobalStyle from './styles/GlobalStyle'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <AuthProvider>
                <ContactProvider>
                    <RoutesMain />
                </ContactProvider>
            </AuthProvider>
        </>
    )
}

export default App
