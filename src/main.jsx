import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter} from 'react-router-dom'
import Store from './Redux/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {Store}>
      <BrowserRouter> 
         <App />
         <Toaster/>
      </BrowserRouter>
  </Provider>
)
