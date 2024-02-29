import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import PostScreen from './screens/PostScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import CreateAccountScreen from './screens/CreateAccountScreen.jsx'
import WelcomeScreen from './screens/WelcomeScreen.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen />,
  },
  {
    path: "/create-account",
    element: <CreateAccountScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
  {
    path: "/post",
    element: <PostScreen />,
  },
  {
    path: "/profile",
    element: <ProfileScreen />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
