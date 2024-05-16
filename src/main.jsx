import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//import error page 404
import Error from './components/Error.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
