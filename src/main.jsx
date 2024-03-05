import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginScreen from './screens/SigninScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import PostScreen from './screens/PostScreen.jsx'
import ProfileScreen from './screens/ProfileScreen.jsx'
import CreateAccountScreen from './screens/CreateAccountScreen.jsx'
import WelcomeScreen from './screens/WelcomeScreen.jsx'
import SignInScreen from './screens/SigninScreen.jsx'
import SearchScreen from './screens/SearchScreen.jsx'
import LostPets from './screens/LostPets.jsx'
import FoundPets from './screens/FoundPets.jsx'
import ChooseLocation from './screens/ChooseLocation.jsx'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
    path: "/signin",
    element: <SignInScreen />,
  },
  {
    path: "/home",
    element: <HomeScreen />,
  },
  {
    path: "/search",
    element: <SearchScreen />,
  },
  {
    path: "/post",
    element: <PostScreen />,
  },
  {
    path: "/profile",
    element: <ProfileScreen />,
  },
  {
    path: "lost-pets",
    element: <LostPets />,
  },
  {
    path: "found-pets",
    element: <FoundPets />,
  },
  {
    path: "choose-location",
    element: <ChooseLocation />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
