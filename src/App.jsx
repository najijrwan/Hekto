import { useState } from 'react'
import HeadingBar from "@/components/layout/HeadingBar";
import NavBar from '@/components/layout/NavBar.jsx'
import MainPage from '@/pages/MainPage.jsx'

function App() {
  return (
    <>
      <HeadingBar />
      <NavBar />
      <MainPage />
    </>
  )
}

export default App
