import React from 'react';
import Typography from "@material-ui/core/Typography";

export const AboutUs = (props:any) => {
    return (
        <div style={{marginTop:'20px', padding:'10px'}}>

            <Typography variant="h3" component="h3" align="center" className="f500"
            style={{marginBottom:'30px'}}> Learn  About
                <span className="red"> Us</span>
            </Typography>
            <Typography variant={"body1"} component={"p"}  style={{marginBottom:'30px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               </Typography>

        </div>
    )
}