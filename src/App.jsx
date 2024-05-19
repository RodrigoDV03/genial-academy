import { BrowserRouter, Router } from 'react-router-dom';
import { AppRouter } from './Router';
import './App.css'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { Area } from './pages/Area'
import { Language } from './pages/Language_A'
import { AreaC } from  './pages/AreaC'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/area",
      element: <Area/>
    },
    {
      path: "/language",
      element: <Language/>
    },
    {
      path: "/areac",
      element: <AreaC/>
    }
  ]);
  return (
    <BrowserRouter> 
      <AppRouter></AppRouter>
    </BrowserRouter>
  )
}

export default App
