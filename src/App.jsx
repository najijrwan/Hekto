import { useState } from 'react'
import HeadingBar from "@/components/layout/HeadingBar";
import NavBar from '@/components/layout/NavBar.jsx'
import MainPage from '@/pages/MainPage.jsx'
import Footer from '@layout/footer/Footer.jsx'

function App() {
  return (
    <>
      <HeadingBar />
      <NavBar />
      <MainPage />
      <Footer />
    </>
  )
}

export default App
