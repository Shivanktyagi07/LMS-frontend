
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePages'


function App() {
 

  return (
    <>
    <Routes>

      <Route path = "/" element={<HomePage/>}></Route>
      
    </Routes>
    
  
    
    </>
  )
}

export default App
