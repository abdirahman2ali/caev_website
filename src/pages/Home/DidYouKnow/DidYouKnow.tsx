import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import classes from "./styles.module.scss";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Bounce from "react-reveal/Bounce";

/**
 * Component used to display quick facts to the users about food in their area
 */
const DidYouKnow: React.FC = () => {
  return (
    <React.Fragment>
      <Box className={classes.Box}>
        <Container className={classes.Container}>
          <Bounce left>
            <Paper className={classes.Paper} elevation={15}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                  <Box p={4}>
                    <Typography variant="h3" component="h3" className="f500">
                      Did you <span className="red">Know?</span>
                    </Typography>

                    <Typography
                      variant="body1"
                      component="p"
                      className={classes.DidYouKnowText}
                    >
                      Did you know that Scarborough is home to one of the most
                      diverse set of cuisines in the city? From Indian, Italian,
                      Greek, Jamaican, Ethiopian, Somalian, Filipino, and
                      Chinese food there are over 70 authentic restaurants that
                      represent different parts of the world all in one city!{" "}
                    </Typography>
                    <Link to="/browse">
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.rightIcon + " " + classes.Button}
                      >
                        Find out more
                      </Button>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <div className={classes.DidYouKnow} />
                </Grid>
              </Grid>
            </Paper>
          </Bounce>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default DidYouKnow;
