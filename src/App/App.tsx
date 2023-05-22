import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Main } from '../Components/Main/Main'
import { Registration } from '../Components/Registration/Registration'
import { Auth } from '../Components/Auth/Auth'
import { useAppDispatch } from '../Components/Redux/Store/store'
import { getUser } from '../Components/Auth/userSlice'
import { Profile } from '../Components/Profile/Profile'
import { Navbar } from '../Components/Navbar/Navbar'
import { initAsyncAchievement } from '../Components/Achievements/achievementsSlice'
import { Admin } from '../Components/Admin/Admin'



export default function App(): JSX.Element {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUser())
    dispatch(initAsyncAchievement())
  }, [dispatch])
  
  
  return <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
}

