import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import { Outlet, Route, Routes } from 'react-router-dom'
import ProdectsPage from './Pages/ProdectsPage'
import UsersPage from './Pages/UsersPage'
import PostsPage from './Pages/PostsPage'
import StatisticPage from './Pages/StatisticPage'
import CattegoryPage from './Pages/CattegoryPage'

const App = () => {
  return (
    <div className='h-[100vh] bg-slate-100 flex flex-col gap-3 px-10 py-3'>
      <Navbar />
      <div className='flex gap-3 h-full'>
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default App