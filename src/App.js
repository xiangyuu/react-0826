import React from 'react';
import Header from './components/Header'
import Guide from './components/Guide'
import Label from './components/Label'
import Main from './components/Main'
import './App.scss'
const App = () => {
  return (
    <div className='container'>
      <Header/>
      <div className='r-flex'>
        <div className='guide'>
          <Guide/>
        </div>
        <div className='c-flex'>
          <Label/>
          <Main/>
        </div>
      </div>
    </div>
  );
}
export default App;
