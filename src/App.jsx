
import './App.css'
import MainRoutes from './routes';
import Footer from './components/footer-condicao'
import Header from './components/header';
import { Toaster } from 'sonner';




function App() {

  return (
    <>
    <Toaster richColors />
    <Header/>
    <main className='main-global'>
    <MainRoutes/>
    </main>
    <Footer/>
    </>
  )
}

export default App
