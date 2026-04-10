import { ViteReactSSG } from 'vite-react-ssg'
import { HelmetProvider } from 'react-helmet-async'
import routes from './App'
import './index.css'

export const createRoot = ViteReactSSG(
  { routes },
  ({ children }) => <HelmetProvider>{children}</HelmetProvider>
)