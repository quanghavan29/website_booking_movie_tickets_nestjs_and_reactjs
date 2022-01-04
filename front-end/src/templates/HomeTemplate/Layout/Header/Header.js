import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    return (
        <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-black bg-opacity-40 text-white fixed w-full z-10">
            <div className="container flex justify-between h-16 mx-auto">
                <a href="/home" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src="https://res.cloudinary.com/fpt-food/image/upload/v1641184945/Website%20Booking%20Movie%20Tickets/cgvlogo_yifmyl.png" alt="CGV Cinemas" className="large" />
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/home" className="flex items-center px-4 -mb-1 border-b-2 border-transparent 
                            text-violet-600 border-violet-600 text-white" activeClassName="border-b-2 border-white">
                            Trang Chủ
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className="flex items-center px-4 -mb-1 border-b-2 border-transparent 
                            text-violet-600 border-violet-600 text-white" activeClassName="border-b-2 border-white">
                            Vé Của Tôi
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/news" className="flex items-center px-4 -mb-1 border-b-2 border-transparent 
                            text-violet-600 border-violet-600 text-white" activeClassName="border-b-2 border-white">
                            Tin Tức & Ưu Đãi
                        </NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/hotline" className="flex items-center px-4 -mb-1 border-b-2 border-transparent 
                            text-violet-600 border-violet-600 text-white" activeClassName="border-b-2 border-white">
                            Hỗ Trợ Khách Hàng
                        </NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <button className="self-center px-8 py-3 rounded">Đăng Nhập</button>
                    <button className="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50">Đăng Ký</button>
                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>

    )
}
