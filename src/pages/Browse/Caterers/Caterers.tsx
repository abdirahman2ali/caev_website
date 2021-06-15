import React from "react";
import { CatererCard } from "../../../components";
import { ICaterers } from "./ICaterers";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import styles from "./Caterer.module.scss";
import catererA from '../../../assets/images/companyA.jpg';
export const Caterers = (props: ICaterers) => {
  return (
    <Container className={styles.container} maxWidth="lg">
      <Typography variant="h3" component="h3" className={styles.title}>
        Explore Our <span className="red__text">Caterers</span>
      </Typography>
      <div className={styles.root}>
        {props.caterers.map((caterer, index) => {
          return (
            <div className={styles.caterer} key={index}>
              <CatererCard name={caterer.name} image={catererA} description={caterer.description} location={caterer.address} />
            </div>
          )
        })}
      </div>

    </Container>
  )
}