import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='h-[100%] bg-slate-700 w-[20%] rounded-[30px] flex items-center justify-center gap-6'>
            <ul>
                <NavLink to='/products'>
                    <li>Products</li>
                </NavLink>
                <NavLink to='/users'>
                    <li>Users</li>
                </NavLink>
                <NavLink to='/posts'>
                    <li>Posts</li>
                </NavLink>
                <NavLink to='/statistics'>
                    <li>Statistic</li>

                </NavLink>
                <NavLink to='/cattegory'>
                    <li>Cattegory</li>
                </NavLink>
            </ul>
        </div>
    )
}

export default Sidebar