import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <header class="header">
    <div class="logo">
        <h1>Job Portal</h1>
    </div>
    <ul class="navbar">
        <Link to='/signin'>Sign In</Link>
        <Link to='/signup'>Sign Up</Link>
    </ul>
</header>
  )
}
