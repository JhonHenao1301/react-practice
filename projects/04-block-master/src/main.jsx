import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvider } from './context/DataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      {/* All children (App component) will 
          be able to see my shared states */}
      <App />
    </DataProvider>
  </React.StrictMode>,
)
