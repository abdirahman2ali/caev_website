import React from "react";
import { ICatererCard } from "./ICatererCard";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./CatererCard.module.scss";
import { Link } from "react-router-dom";

export const CatererCard = (props: ICatererCard) => {
    const img = {
        backgroundImage: `url("${props.image}")`,
    }
    return (
        <Paper className={styles.card} elevation={0}>
            <Link to={`catering/${props.name}/${props.location}`}>
                <div className={styles.card__picture}>
                    <img src={props.image} alt="Caterer" />
                </div>
                <div className={styles.card__body}>
                    <div className={styles.card__title}>
                        <Typography variant="h6" component="h6">
                            {props.name}
                        </Typography>

                    </div>
                    <div className={styles.card__description}>
                        <p style={{ marginTop: "0" }}>{props.description}</p>

                    </div>
                    <div className={styles.card__button}>

                    </div>

                </div>
            </Link>
        </Paper>
    );
}