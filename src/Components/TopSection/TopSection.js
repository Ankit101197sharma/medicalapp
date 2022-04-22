import React from "react";
import classes from "./TopSection.module.css";
import { FiPhoneCall } from "react-icons/fi";
import { serviceData } from "../../Datafile";
import {FaTooth} from "react-icons/fa"

const TopSection = () => {
  return (
    <section className={classes.topSection}>
      <div className={classes.mainDiv00}>
        <div style={{ display: "flex", margin: "10px" }}>
          <div>
            <img
              className={classes.logoImg}
              src="https://images01.nicepage.com/cb/34/cb34686e58fd85ada4d4fcd7d9e9b08f.png"
              alt="tooth"
            />
          </div>
          <div className={classes.nameDiv}>
            <h3>Dental Clinic</h3>
            <p>Sample text. Lorem ipsum </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className={classes.iconDiv}>
            <h1>
              <FiPhoneCall />
            </h1>
          </div>
          <div className={classes.contactDiv0}>
            <h1>867-873-2775</h1>
            <p>5209 Franklin</p>
            <p>Ave., Yellownife, NT, X1A 2N8</p>
          </div>
        </div>
      </div>

      <div >
          <div className={classes.landingDiv}>
            <div className={classes.posterHead}>
                <h1 >Welcome to Our Dental Clinic</h1>
                <p>A Smile Change Everything...</p>
            </div>
          </div>
      </div>
      <div>
         <div>
         <h2 style={{marginTop:'20px'}}>Our Services</h2>
         <div className={classes.mainDiv}>
            
            {serviceData.map(item=>{
              
                return(
                    <div className={classes.imgGrid}>
                        <div className={classes.imgConatiner}>
                            <div className={classes.aCard}>
                              <div className={classes.imgd4}>
                              <h1 className={classes.imgd5}><FaTooth/></h1>
                              </div>
                                
                                <h2 className={classes.serviceText}>{item.serviceHead}</h2>
                                <p className={classes.servicePara}>{item.serviceDecs}</p>
                                

                            </div>

                        </div>
                    </div>
                )
            })}

        </div>

         </div>
      </div>
    </section>
  );
};

export default TopSection;
