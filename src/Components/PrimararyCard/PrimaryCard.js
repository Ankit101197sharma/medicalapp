import React from 'react'
import classes from "./PrimaryCard.module.css"

function PrimaryCard() {
  return (
    <div >
        <div className={classes.PrimaryCard}>
            <div className={classes.contentDiv}>
                <h1>Primary Care is your first stop for most health questions and concerns</h1>
                <p>At the Adam Dental Clinic, you can relax—you’re in good hands. Our commitment to your family is carried out in everything our Yellowknife dentists and staff do, from the friendly way we greet you when you call or come through our door, to the thorough, gentle way we conduct dental examinations. Our team of family dentists and specialists are eager to use our training to help keep you and your loved ones healthy.</p>
            </div>
        </div>
    </div>
  )
}

export default PrimaryCard;