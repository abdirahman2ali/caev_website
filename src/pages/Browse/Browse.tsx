import React, { useEffect } from "react";
import { Navigation } from "../../components";
import { Caterers } from "./Caterers";
import { ICaterer } from "../../utils/Caterer";
import { connect } from "react-redux";
import { getVendors } from "../../actions";
import axios from "axios";

const BrowseSection = (props: any) => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  useEffect(() => {
	  async function asyncGetVendors(){
props.getVendors(source);
	  }
	  asyncGetVendors();
    

    return () => {
      source.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Navigation />
      <Caterers caterers={props.caterers} />
    </React.Fragment>
  );
};

type BrowseSectionProps = {
  caterers: Array<ICaterer>;
};

const mapStateToProps = (state: any): BrowseSectionProps => {
  return {
    caterers: state.caterersReducer.caterers,
  };
};

export const Browse = connect(mapStateToProps, { getVendors })(BrowseSection);
