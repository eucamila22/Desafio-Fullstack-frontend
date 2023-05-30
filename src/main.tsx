import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from './providers/ModalProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ModalProvider>
                <App />
            </ModalProvider>
        </BrowserRouter>
    </React.StrictMode>
)
