import React from "react";
import Button from "@material-ui/core/Button";
import { Typography, Box } from "@material-ui/core";
import {Link} from 'react-router-dom';

const LearnMore:React.FC = () => {
  return (
    <React.Fragment>
      <Box marginTop={10}>
        <Typography align="center">
        
        <Link to="/comingsoon">  <Button
            variant="contained"
            style={{ fontSize: "1.1em" ,padding:'15px'}}
            color="primary"
          > 
            Learn More
           
          </Button> 
          </Link> 
        </Typography>
      </Box>
    </React.Fragment>
  );
};
export default LearnMore;
