import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Caller from './components/Caller'
import Dialpad from './components/Dialpad'
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: '/caller',
      element: <Caller/>
    },
    {
      path: '/dialpad',
      element: <Dialpad/>
    }
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
