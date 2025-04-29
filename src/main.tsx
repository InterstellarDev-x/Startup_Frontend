
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const qureyclient = new QueryClient()

createRoot(document.getElementById('root')!).render(
<QueryClientProvider client={qureyclient}>
    <App />
    </QueryClientProvider>
)
