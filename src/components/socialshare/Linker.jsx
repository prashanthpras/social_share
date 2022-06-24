import React,{useState} from 'react'
import Share2 from './Share2'
import {BsWhatsapp} from "react-icons/bs"
import {FiCopy} from "react-icons/fi"
import First from "./link.module.css"

const Linker = () => {
    let [open,setOpen]=useState(false)
    let [input,setInput]=useState("")

    

    let handleOpen=()=>{
        setOpen(true)
    }

    let handleCopy=()=>{
     console.log(navigator.clipboard.writeText("https://github.com/"))
    }
     

  return (
    
  <div className={First.link}>

     <div >
           <h1>Please Copy Your Link From Below</h1>

        <input type="text" value={"https://github.com/"} />
        <button onClick={handleCopy}><FiCopy/></button>

     </div>
  

  {/* <div className={First.btnContainer}>
  <div className={First.btn1}><BsWhatsapp className={First.what}/></div>
    <button className={First.btn2} onClick={handleOpen}>share</button>
  </div> */}

  {open===false?null:<Share2 setOpen={setOpen}/>}
  
  </div>
  )
}

export default Linker