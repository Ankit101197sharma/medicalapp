import React from 'react'
import classes from "./Footer.module.css"

function Footer() {
  return (
    <section className={classes.footerDiv}>
        <div className={classes.footerText}>
            <p><a href="/">Template</a> created with <a href="/">NicePage</a> </p>
           
        </div>
    </section>
  )
}

export default Footer;