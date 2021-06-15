import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import styles from './Footer.module.scss';
import faq from "./FooterLinks/FAQ";

const Footer = () => {
  return (
    <React.Fragment>
      <Box
        marginTop={10}
        color="primary"
        style={{ height: "30px", backgroundColor: "rgb(219, 77, 75)" }}
      ></Box>
      <Box

        color="primary"
        style={{ height: "100%", backgroundColor: "rgb(239, 83, 80)", paddingBottom: 100 }}
      >
               <Container style={{marginLeft:'5%', marginRight:'5%'}}>
          <div className={styles.footerInformation} style={{paddingTop:'20px'}}>
 <div className={styles.footerInformationSection}>

	 <Typography
          align="left"
          variant="h3"
          style={{ color: 'white', position: 'relative', marginLeft: 50, fontWeight: 300 }}
        >
        
          </Typography>
        <Typography
          align="left"
          variant="body1"
          style={{ color: 'white', position: 'relative', top: '15px', marginLeft: 50 }}
        >
         
          </Typography>
 
	 </div>
            <div className={styles.footerInformationSection}>
              <ul>
                <li><h3>Contact Us</h3></li>
                <li> <a href="mailto:caevinfo@gmail.com" style={{ color: 'white' }}>Email: caevinfo@gmail.com</a></li>
              </ul>
            </div>
            <div className={styles.footerInformationSection}>
              <ul>
                <li><h3>About Us</h3></li>
                  <li><Link to="files/Who We Are" target="blank" style={{color:"white"}}> Who We Are</Link></li>
              </ul>
            </div>
            <div className={styles.footerInformationSection}>
              <ul>
                <li><h3>Resources</h3></li>
                <Router>
                  <div>

                    <li><Link to="/FAQ" target="_blank" style={{color:"white"}} > FAQ</Link></li>
		    	          <li><Link to="/files/Caev-Privacy-Policy.html" target="_blank" style={{color:'white'}}>Privacy Policy</Link></li>
                    <li><Link to="" target="_blank" style={{color:"white"}}>Join as Caterer</Link></li>
                    <li><Link to="/files/Caev-TermsandConditions.html" target="_blank" style={{color:'white'}}>Terms and Conditions</Link></li>
                  </div>
                </Router>
              </ul>
              <Typography
          align="left"
          variant="body1"
          style={{ color: 'white', position: 'absolute', top: '15px', marginLeft: 50 }}
        >
         
          </Typography>
            </div>
          </div>
        </Container>
        {/* <Typography
          align="center"
          variant="body1"
          style={{ color: 'white', position: 'relative', marginTop: '50px', left: '10px' }}
        >
          © Caev 2019. All Rights Reserved.
       </Typography> */}

      </Box>
  </React.Fragment>
  );
};

function FAQ () {
  return ( faq
    )
}

export default Footer;
