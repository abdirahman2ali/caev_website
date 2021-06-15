import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import DeliveryIcon from "@material-ui/icons/DriveEta";
import classes from "./styles.module.scss";

export const QuickFacts = (props: any) => {
  return (
    <Container maxWidth={false} className={classes.root}>
      <Typography variant="h6" component="h6" className="f500">
        {props.name}
      </Typography>
      <Typography variant="body1" component="p" style={{}}>
        <i>{props.tagline}</i>
      </Typography>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <MoneyIcon style={{ fontSize: '0.95em', marginRight: '3px' }} />
        <Typography variant="body1" component="p" style={{ fontSize: '0.95em' }}>
          Minimum order of $20
          </Typography>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <HomeIcon style={{ fontSize: '0.95em', marginRight: '3px' }} />
        <Typography variant="body1" component="p" style={{ fontSize: '0.95em' }}>
          {props.location}
        </Typography>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <DeliveryIcon style={{ fontSize: '0.95em', marginRight: '3px' }} />
        <Typography variant="body1" component="p" style={{ fontSize: '0.95em' }}>
          $10 delivery fee
          </Typography>
      </div>


    </Container>
  );
};

/*
   <Typography
        variant="body1"
        component="p"
        style={{ marginTop: "5px", marginBottom: "10px" }}
      >
        {" "}
        {props.tagline}{" "}
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={6} alignContent={"center"}>
          <Typography variant="body1" component="p">
            {" "}
            <HomeIcon />
            <i> {props.location}</i>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={6} alignContent={"center"}>
          <Typography variant="body1" component="p">
            {" "}
            <AlarmIcon /> 24 hour notice required
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} alignContent={"center"}>
          <Typography variant="body1" component="p">
            {" "}
            <MoneyIcon /> $20 minimum order
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} alignContent={"center"}>
          <Typography variant="body1" component="p">
            {" "}
            <DeliveryIcon /> $10 delivery fee
          </Typography>
        </Grid>
      </Grid>


*/