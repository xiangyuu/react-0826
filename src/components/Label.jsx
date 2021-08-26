import React from 'react'
import './Label.scss'
function Label() {
  return (
    <div id='label'>
      <ul>
        <li className='checked'>
          <span>全部</span>
        </li>
        <li className='unchecked'>
          <span>觀光</span>
        </li>
        <li className='unchecked'>
          <span>音樂</span>
        </li>
        <li className='unchecked'>
          <span>卡通</span>
        </li>
        <li className='unchecked'>
          <span>寵物</span>
        </li>
        <li className='unchecked'>
          <span>動畫</span>
        </li>
        <li className='unchecked'>
          <span>最新上傳</span>
        </li>
        <li className='unchecked'>
          <span>直播中</span>
        </li>
      </ul>
    </div>
  )
}

export default Label