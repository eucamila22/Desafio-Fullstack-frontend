import { AuthProvider } from './providers/AuthProvider'
import RoutesMain from './routes'
import GlobalStyle from './styles/GlobalStyle'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <AuthProvider>
                <RoutesMain />
            </AuthProvider>
        </>
    )
}

export default App
