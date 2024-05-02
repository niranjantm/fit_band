import { useEffect, useState } from "react"
import classes from "./Image.module.css"

// eslint-disable-next-line react/prop-types
function Image({image,data}) {
const [time,setTime] = useState("");
const [displayData,setDisplayData] = useState('')



useEffect(()=>{
   
    if(data==="Time"){
        setDisplayData(time)
    }
    if(data==="Heart Rate"){
        setDisplayData(78)
    }
    
    const timer = setInterval(()=>{
        setTime(new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: '2-digit'
        }).format(new Date()))

        return()=>{
            clearInterval(timer)
        }
    },1000)
},[data, time])

  return (
    
    <section className={classes.imageSection}>
       
        <img src={image}></img>
        <h3 className={classes.data}>{displayData}</h3>
    </section>
  )
}

export default Image