import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../components/users/Login'

export default function FullLayout() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#f2f2f2' }}>
        <header style={{ background: '#ffffff', height: '2vh', background: "linear-gradient(0deg, hsla(137, 100%, 5%, 1) 0%, hsla(119, 100%, 15%, 1) 100%)" }}></header>
        <main style={{ height: '86vh', width: '100vh' }}>
            <Outlet />
        </main>
        <footer style={{ background: '#ffffff', height: '10vh', padding: 15, textAlign: 'center' }}>&copy; 2022 copyright by LockBox</footer>
        <footer style={{ background: '#ffffff', height: '2vh', background: "linear-gradient(0deg, hsla(137, 100%, 5%, 1) 0%, hsla(119, 100%, 15%, 1) 100%)" }}></footer>
    </div>
  )
}
