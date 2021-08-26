import React from 'react'
import threeline from '../static/pictures/三條線icon.png'
import logo from '../static/pictures/newyoutube.png'
import search from '../static/pictures/搜尋.png'
import microphone from '../static/pictures/搜尋麥克風.png'
import other from '../static/pictures/其他icon.png'
import more from '../static/pictures/更多icon.png'
import user from '../static/pictures/用戶icon.jpg'
import './Header.scss'

function Header() {
  return (
    <div id='header'>
      <div className='left'>
        <div className='main-logo'>
          <img src={threeline} alt=''/>
        </div>
        <div className='logo'>
          <img src={logo} alt=''/>
        </div>
      </div>
      <div className='mid'>
        <div className='search-group'>
          <div className='search-input'>
            <input className='input' placeholder='搜尋'/>
          </div>
          <div className='search-logo'>
            <img src={search} alt=''/>
          </div>
          <div className='microphone-logo'>
            <img src={microphone} alt=''/>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='right-logo'>
          <img src={other} alt=''/>
        </div>
        <div className='right-logo'>
          <img src={more} alt=''/>
        </div>
        <div className='login-group'>
          <div className='right-logo'>
            <img src={user} alt=''/>
          </div>
            <span>登入</span>
        </div>
      </div>
    </div>
  )
}

export default Header