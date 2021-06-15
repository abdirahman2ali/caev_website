import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
//import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import classes from "./styles.module.scss";

/**
 * picture: path to a picture
 * title: title of carrousel card
 * text: text for carrousel card
 */
type CarrouselCardProps = {
  picture: string;
  title: string;
  text: string;
};
/**
 * Component represents one item in the carrousel showing popular
 * food choices by customers
 * @props
 */
const CarrouselCard = (props: CarrouselCardProps) => {
  //const classes = useStyles();
  return (
    <Box marginBottom={4} margin={2}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.picture}
            title="Food"
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.text}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/*
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        
        </CardActions>*/}
      </Card>
    </Box >
  );
};

export default CarrouselCard;
