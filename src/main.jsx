import React from 'react'
import ReactDOM from 'react-dom/client'
/* import App from './App' */
import './index.css'
import CounterApp from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App title="React Project" subtitle="Desarrollador Web UI" name="Hugo Sarmiento"/> */}
  
    <CounterApp value={0}/>
  </React.StrictMode>
) 