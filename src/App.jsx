
import classes from "./App.module.css"
import amazonLogo from "./assets/amazonLogo.png"
import Info from "./components/Info"
import Image from "./components/Image"
import { useState } from "react"

function App() {

  const [image,setImage] = useState("")
  const [data,setData] = useState("")
  
  console.log(data)

  return (
    <div className={classes.app}>
      <header className={classes.appHeader}>
        <nav className={classes.topbar}>
          <img className={classes.topbarImg} src={amazonLogo} alt ="amazon logo"></img>
        </nav>
      </header>

      <div className={classes.content}>
        <Image image={image} data={data}></Image>
        <Info handleImage = {setImage} handleData ={setData}></Info>
      </div>
  
    </div>
  )
}

export default App
