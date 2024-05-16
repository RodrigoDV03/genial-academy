import { BrowserRouter, Router } from 'react-router-dom';
import { AppRouter } from './Router';
import './App.css'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { Area } from './pages/Area'
import { Language } from './pages/Language_A'
import { Unmsm } from './pages/Unmsm'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter> 
      <AppRouter></AppRouter>
    </BrowserRouter>
  )
}

export default App
