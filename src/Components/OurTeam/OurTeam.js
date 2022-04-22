import React from 'react'
import { teamData } from '../../Datafile';
import classes from "./OurTeam.module.css"

function OurTeam() {
  return (
    <section className={classes.gridCard}>
    <div className={classes.gridSheet}>
        <div className={classes.gridGroup}>
           
           
            <h2>Our Team</h2>
            <p className={classes.paraText}>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
        
        </div>
        <div className={classes.mainDiv}>
        
        {teamData.map(item=>{
            return(
                <div className={classes.imgGrid}>
                    <div className={classes.imgConatiner}>
                        <div className={classes.aCard}>
                            <img  className={classes.imgd} src={item.thumbnail} alt="" />
                            <h2>{item.thumbnailName}</h2>
                            <p>{item.thumbnailRole}</p>
                            

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

export default OurTeam;