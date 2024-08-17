import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProdectsPage from '../Pages/ProdectsPage'
import UsersPage from '../Pages/UsersPage'
import PostsPage from '../Pages/PostsPage'
import StatisticPage from '../Pages/StatisticPage'
import CattegoryPage from '../Pages/CattegoryPage'

const Main = () => {
    return (
        <div className='w-[80%] bg-slate-700 rounded-[30px]'>
            <Routes>
                <Route path='/products' element={<ProdectsPage />} />
                <Route path='/users' element={<UsersPage />} />
                <Route path='/posts' element={<PostsPage />} />
                <Route path='/statistics' element={<StatisticPage />} />
                <Route path='/cattegory' element={<CattegoryPage />} />
            </Routes>
        </div>
    )
}

export default Main