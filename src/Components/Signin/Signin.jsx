import React from 'react'
import './Signin.css'
import { Header } from '../Header/Header'
export const Signin = () => {
  return (
    <>
    <Header/>
    <div id='signin'>
    <h1>Sign In</h1>
    <form>
    <label > Username</label>
    <input type="text" placeholder='' />
    <label>Password</label>
    <input type="text" placeholder='' />
    <input type="button" value="Login" />
    </form>
    </div>
    </>
    )
}
