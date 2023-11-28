import { GlobalStyle } from './styles/GlobalStyle'
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './contexts/authContext'
import { ToastContainer } from 'react-toastify'
import { RouteSoftware } from "./routes/index"

export function App() {
  return (
      <BrowserRouter>
        <GlobalStyle />
        <ToastContainer autoClose={3000}/>
        <AuthProvider>
          <RouteSoftware/>
        </AuthProvider>
      </BrowserRouter>
  );
}