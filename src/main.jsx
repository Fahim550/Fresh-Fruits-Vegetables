import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './Component/Header.jsx'

const style={
  container:''
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Header/> */}
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
