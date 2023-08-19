import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Pages/Login'
import RegistrationPage from '../Pages/RegistrationPage'
import Profile from '../Pages/Profile'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route  path='/' element={<LoginPage/>} />
        <Route path='/register' element={<RegistrationPage/>} />
        <Route path='/profile' element={<Profile/>} />
    </Routes>
  )
}
