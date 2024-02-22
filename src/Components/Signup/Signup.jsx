import React from 'react'
import { Header } from '../Header/Header'
import { Link } from 'react-router-dom'
import './Signup.css'
export const Signup = () => {
    return (
        <>
        <Header/>
        <div className='signup'>
        <h1>Sign Up</h1>
        <form>
        <label>First Name</label><input type="text" placeholder='' />
        <label>Last Name</label><input type="text" placeholder='' />
        <label>Email</label><input type="email" placeholder='' />
        <label>Password</label><input type="password" placeholder='' />
        <label> Confirm Password</label><input type="password" placeholder='' />
        <input type="button" value="Submit" />
        </form>
        <p>already have an account?</p>
        <Link to='/signin'>Sign In</Link>
        </div>
        </>
        )
    }
 