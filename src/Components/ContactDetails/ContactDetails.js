import React from 'react'
import classes from "./ContactDetails.module.css"

function ContactDetails() {
  return (
    <section className={classes.contactDetails}>
       <div>
           
                <div className={classes.ContactDetailsImg}>
                    <img src="https://images01.nicepage.com/76/fa/76fab2972f81f9b7b0ca7b8eca061d37.jpeg" alt="kkk" />
                </div>
                
                <div className={classes.contactdiv1}>
                    <div >
                        <h3>Our Address</h3>
                        <p >5209 Franklin Ave. Yellowknife, NT, X1A 2N8</p>
                        <p>1 212-736-3100</p>
                        <a style={{color:'#48bdd7'}} href="/">contacts@esbnyc.com</a>
                    </div>
                    <div style={{width:'30%'}}>
                        <h3>Contact Us Form Free Consultation</h3>
                        <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                    </div>
                </div>
                
            </div>
        
    </section>
  )
}

export default ContactDetails;