import React from 'react'
//import Share from './components/socialshare/Share';
import Share2 from './components/socialshare/Share2';
import Linker from './components/socialshare/Linker';
import Video1 from "./assets/video/ro.mp4"
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <div id="main">
      <Navbar/>

      <video src={Video1} autoPlay muted loop />
      <div id="icons">
      <div id='pdiv'>
        <Share2/>
        </div>
        <div id='rdiv'>
          <Linker/>
        </div>
      
      </div>

  


    </div>
  )
}

export default App