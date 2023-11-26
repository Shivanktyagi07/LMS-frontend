
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePages'
import AboutUs from './Pages/Aboutus'
import NotFound from './Pages/NotFound'


function App() {
 

  return (
    <>
    <Routes>

      <Route path = "/" element={<HomePage/>}></Route>
      <Route path = "/about" element={<AboutUs/>}></Route>
      <Route path="*" element={<NotFound />}></Route>
      
    </Routes>
    
  
    
    </>
  )
}

export default App
