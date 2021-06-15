import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Carrousel from "./Carrousel/Carrousel";
import classes from "./styles.module.scss";

const Explore:React.FC = () => {
  return (
    <React.Fragment>
      <Box marginTop={5} id="startchange">
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            className={classes.Title + " f500"}
            component="h3"
            align="left"
          >
            Explore Unique
            <span className="red"> Cuisines</span>
          </Typography>
          <Box marginTop={2}>
            <Typography variant="body1" component="p" align="left">
              Enjoy the diverse catering cuisines your local area has to offer
              by browsing and being able to filter through a variety of options.
              Caev(CAter to EVents) simplifies the whole process for both users
              by taking care of all the hassles that come with food so you can
              focus on enjoying your event and the delicious meals that come
              with it.
            </Typography>
                           <Carrousel />
             
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Explore;
