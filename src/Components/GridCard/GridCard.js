import React from 'react'
import classes from "./GridCard.module.css"
import {data} from "../../Datafile"

function GridCard() {
  return (
    <section className={classes.gridCard}>
        <div className={classes.gridSheet}>
            <div className={classes.gridGroup}>
                <h2>We offer a soothing dental clinic environment with many creature comforts to help make your visit one you look forward to.</h2>
            </div>
            <div className={classes.mainDiv}>
            
            {data.map(item=>{
                
                return(
                    <div className={classes.imgGrid}>
                        <div className={classes.imgConatiner}>
                            <div className={classes.aCard}>
                                <img  className={classes.imgd} src={item.imgSrc} alt="" />
                                <h2>{item.imgHead}</h2>
                                

                            </div>

                        </div>
                    </div>
                )
            })}

        </div>

        </div>
    </section>
  )
}

export default GridCard;