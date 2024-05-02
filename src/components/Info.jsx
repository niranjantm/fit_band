import { useEffect } from "react"
import ProductData from "../assets/product-detail"
import classes from "./Info.module.css"

function Info({handleImage,handleData}) {

useEffect(()=>{
    handleImage(ProductData.colorOptions[0].imageUrl)
},[])

  return (
    
    <section className={classes.infoSection}>
        <h1>
            {ProductData.title}
        </h1>
        <p>
            {ProductData.description}
        </p>
        <h3>
            Select color
        </h3>
        <div className={classes.imageDiv}>
            {ProductData.colorOptions.map((item)=>{
                return(
                   <button key={item.styleName} className={classes.colorBtn} onClick={()=>handleImage(item.imageUrl)} >
                    <img className={classes.images} alt="colors" src={item.imageUrl}></img>
                   </button>
                )
            })}
        </div>
        <div className={classes.features}>
            <h2>Features</h2>
            <div>
                {ProductData.featureList.map((item,index)=>{
                    return(
                        <button key={index} onClick={()=>handleData(item)}>{item}</button>
                    )
                   
                })}
            </div>
        </div>
        <button className={classes.buyNow}>Buy Now</button>

    </section>

  )
}

export default Info