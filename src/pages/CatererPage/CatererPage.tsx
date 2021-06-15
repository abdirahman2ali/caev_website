import React, { useEffect } from "react";
import { ICatererPage } from "./ICatererPage";
import { ICaterer } from "../../utils"; import { Navigation } from "../../components";
import { Hero } from "./Hero";
import { connect } from "react-redux";
import { getVendors } from "../../actions";
import { AboutUs } from "./AboutUs";
import { Cart } from "./Cart";
import classes from "./Caterer.module.scss";
import { Menu } from "./Menu";
import catererA from "../../assets/images/companyA.jpg";
import axios from 'axios';
const getCatererObj = (name: string, address: string, caterers: ICaterer[]) => {
  return caterers.filter((caterer: ICaterer) => {
    return caterer.name === name && caterer.address === address;
  });
};

export const CatererPageSection = (props: ICatererPage) => {
  // @ts-ignore
  const name = props.match.params.name;
  // @ts-ignore
  const address = props.match.params.address;
  //@ts-nocheck
  let caterer: ICaterer = getCatererObj(name, address, props.caterers)[0];
  useEffect(() => {
	  const CancelToken = axios.CancelToken;
	  const source = CancelToken.source();
	async function asyncGetVendors(){
		//@ts-ignore
		await props.getVendors(source);

	}
	asyncGetVendors();
	return () =>{
		source.cancel();
	}
    	  }, []);

  //const menu :any = getMenu(caterer.resturant_id);

  return caterer ? (
    <React.Fragment>
      <Navigation />
      <div className={classes.container} style={{ marginBottom: "100px" }}>
        <Hero
          name={caterer.name}
          location={caterer.address}
          tagline={caterer.description}
          image={catererA}
        />

        <AboutUs />
        <Menu restaurant_id={caterer.resturant_id} />
      </div>
      {/* <div className={classes.caterer}>
          <Hero name={caterer.name}
            location={caterer.address}
            tagline={caterer.description}
            image={catererA} />

          <AboutUs />
          <Menu restaurant_id={caterer.resturant_id} />
        </div>
        <div className={classes.cart}>
          <Cart />
        </div>
 
      </div>*/}
    </React.Fragment>
  ) : (
    <React.Fragment>Not found</React.Fragment>
  );
};

type CaterersPageSectionProps = {
  caterers: Array<ICaterer>;
};

const mapStateToProps = (state: any): CaterersPageSectionProps => {
  return {
    caterers: state.caterersReducer.caterers,
  };
};

export const CatererPage = connect(mapStateToProps, { getVendors })(
  CatererPageSection
);
