import React from 'react';
import './Guide.scss'
import home from '../static/pictures/home.png'
import explore from '../static/pictures/探索.png'
import subscription from '../static/pictures/訂閱內容.png'
import media from '../static/pictures/媒體庫.png'
import record from '../static/pictures/觀看紀錄.png'
import music from '../static/pictures/music.jpg'
import sport from '../static/pictures/cup.jpg'
import game from '../static/pictures/game.jpg'
import movie from '../static/pictures/movie.jpg'
import news from '../static/pictures/news.jpg'
import live from '../static/pictures/link.jpg'
import threeD from '../static/pictures/360.jpg'
import channel from '../static/pictures/add.png'
import premium from '../static/pictures/premium.png'
import live2 from '../static/pictures/直播.png'
import setting from '../static/pictures/setting.png'
import flag from '../static/pictures/檢舉紀錄.png'
import question from '../static/pictures/說明.png'
import exclamation from '../static/pictures/option.png'
import user from '../static/pictures/用戶icon.jpg'

const Guide = () => {
  return (
    <div id='guide'>
      <div>
        <ul>
          <li>
            <img src={home} alt='' />
            <span>首頁</span>
          </li>
          <li>
            <img src={explore} alt='' />
            <span>探索</span>
          </li>
          <li>
            <img src={subscription} alt='' />
            <span>訂閱內容</span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <img src={media} alt='' />
            <span>媒體庫</span>
          </li>
          <li>
            <img src={record} alt='' />
            <span>觀看紀錄</span>
          </li>
        </ul>
      </div>
      <div className='guide-login'>
        <span>
          登入帳戶即可對影片表示喜歡、發布留言及訂閱頻道。
        </span>
        <div>
          <img src={user} alt="" />
          <span>登入</span>
        </div>
      </div>
      <div>
        <span className='yt-choice'>YOUTUBE精選</span>
        <ul>
          <li>
            <img src={music} alt='' />
            <span>音樂</span>
          </li>
          <li>
            <img src={sport} alt='' />
            <span>體育</span>
          </li>
          <li>
            <img src={game} alt='' />
            <span>遊戲</span>
          </li>
          <li>
            <img src={movie} alt='' />
            <span>電影</span>
          </li>
          <li>
            <img src={news} alt='' />
            <span>新聞</span>
          </li>
          <li>
            <img src={live} alt='' />
            <span>直播</span>
          </li>
          <li>
            <img src={threeD} alt='' />
            <span>360 度影片</span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <img src={channel} alt='' />
            <span>瀏覽頻道</span>
          </li>
        </ul>
      </div>
      <div>
        <span className='yt-function'>更多YOUTUBE功能</span>
        <ul>
          <li>
            <img src={premium} alt='' />
            <span>YouTube Premium</span>
          </li>
          <li>
            <img src={live2} alt='' />
            <span>直播</span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <img src={setting} alt='' />
            <span>設定</span>
          </li>
          <li>
            <img src={flag} alt='' />
            <span>檢舉紀錄</span>
          </li>
          <li>
            <img src={question} alt='' />
            <span>說明</span>
          </li>
          <li>
            <img src={exclamation} alt='' />
            <span>提供意見</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Guide;