
import './App.css'
import MainRoutes from './routes';
import Foooter from './components/footer'
import Header from './components/header';
import { Toaster } from 'sonner';



function App() {

  return (
    <>
    <Toaster richColors />
    <Header/>
    <MainRoutes/>
    <Foooter/>
      
    </>
  )
}

export default App
