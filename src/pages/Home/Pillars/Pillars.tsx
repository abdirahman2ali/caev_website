import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import classes from "./styles.module.scss";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import ExploreIcon from "@material-ui/icons/Explore";
import CheckIcon from "@material-ui/icons/CheckCircleOutline";
import ResturantIcon from "@material-ui/icons/Restaurant";
import ShoppingIcon from "@material-ui/icons/ShoppingBasket";
import CallIcon from "@material-ui/icons/Call";
import Pillar from "./Pillar/Pillar";
import Fade from "react-reveal/Fade";
/**
 * General component for display caev pillars in a 3x3 grid
 */
const Pillars: React.FC = () => {
  return (
    <React.Fragment>
      <Box marginTop={10} className={classes.Pillars}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h3"
            align="center"
            className="f500"
          >
            How Do We Make Your Life
            <span className="red"> Easy?</span>
          </Typography>

          <Box marginTop={10}>
            <Fade>
              <Grid container justify="center" spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Pillar
                    title="Variety"
                    text="Select from a wide variety of unique caterers around the region "
                    link="#"
                  >
                    <ResturantIcon className={classes.icon} />
                  </Pillar>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Pillar
                    title="Cater Safe"
                    text="Handpicked caterers that have a clean record of inspection from the city"
                    link="#"
                  >
                    <CheckIcon className={classes.icon} />
                  </Pillar>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Pillar
                    title="Simple Ordering"
                    text="An optimized ordering process that simplifies everything into a few simple steps"
                    link="#"
                  >
                    <ExploreIcon className={classes.icon} />
                  </Pillar>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Pillar
                    title="Right Pricing"
                    text="Plan your event at the right budget by finding the right meal at the right price"
                    link="#"
                  >
                    <MoneyIcon className={classes.icon} />
                  </Pillar>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Pillar
                    title="Customer Service"
                    text="Plan your event with a dedicated team that is ready to help you every step of the way"
                    link="#"
                  >
                    <CallIcon className={classes.icon} />
                  </Pillar>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Pillar
                    title="Exclusive Discounts"
                    text="Automatically qualify for exclusive discounts based on the size of your order "
                    link="#"
                  >
                    <ShoppingIcon className={classes.icon} />
                  </Pillar>
                </Grid>
              </Grid>
            </Fade>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Pillars;
