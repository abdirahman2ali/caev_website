import React, { useEffect } from "react";
import axios from "axios";
import { Home, Browse, CatererPage, Login, Signup, Checkout, Reset} from "./pages";
import FAQ from "./pages/FAQ/FAQ";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { resolveUser } from "./actions/login";
import { connect } from "react-redux";
const App: React.FC = (props: any) => {
  useEffect(() => {
    
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    async function asyncResolveUser() {
      if (localStorage.getItem("caev-token")) {
        await props.resolveUser(source);
      }
    }

    asyncResolveUser();
    return () => {
      source.cancel();
      };
  }, [props]);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/catering/:name/:address" component={CatererPage} />
          <Route path="/browse">
            <Browse />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Signup />
          </Route>
          <Route path="/forgot">
            <Reset/>
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>
  );
};


export default connect(null, { resolveUser })(App);
