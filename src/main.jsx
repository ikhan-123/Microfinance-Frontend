import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Layout from './Layout'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import SignUpForm from './Pages/SignUpForm'
import LoginScreen from './Pages/Login'
import DynamicLoanForm from './Components/DynamicLoanForm'

const router = createBrowserRouter([
  {
    path : '',
    element : <Layout/>,
    children : [
      {
        path : '',
        element : <Home/>
      },
      {
        path : 'about',
        element : <About/>
      },
      {
        path : 'sign-up',
        element : <SignUpForm/>
      },
      {
        path : 'login',
        element : <LoginScreen/>
      },
      {
        path : 'loan-form',
        element : <DynamicLoanForm/>
      },
      {
        path : 'contact',
        element : <Contact/>
      },
      {
        path : 'services',
        element : <Services/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Layout/>
  </RouterProvider>
)
