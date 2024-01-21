
import './App.css'
import MainRoutes from './routes';
import Foooter from './components/footer'
import Header from './components/header';



function App() {

  return (
    <>

    <Header/>
      
     <div style={{
      height:"100vh"
     }}>

        <MainRoutes/>

     </div>

      <Foooter/>
      
    </>
  )
}

export default App
