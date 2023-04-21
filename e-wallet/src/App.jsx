import { useState } from 'react'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import './styles/App.css'

import Home from './Home'
import AddCard from './AddCard'
import Top from './components/Top'

function App() {
  const [header, setHeader] = useState('E-WALLET');
  const router = createBrowserRouter ([
    {
      path: '/',
      element: <Home setHeader={setHeader} />
    },
    {
      path: '/addcard',
      element: <AddCard setHeader={setHeader} />
    }

  ])

  return (
    <div className="App">
      <Top headerTitle={header} />
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
