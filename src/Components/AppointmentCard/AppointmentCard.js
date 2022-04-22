import React from 'react'
import classes from "./AppointmentCard.module.css"

const AppointmentCard = ()=> {
  return (
    <div>
        <div>
            <div className={classes.appointmentText}>
                <h1>Book an Appointment</h1>
                <button>SEND EMAIL</button>
            </div>
            
            <div className={classes.appointmentCard}>
            <img src="https://images01.nicepage.com/be/dd/beddb6fb8dcd524b10069485fc19b771.jpeg" alt="maa_behen" />
        
            </div>
            
            
        </div>
    </div>
  )
}

export default AppointmentCard;