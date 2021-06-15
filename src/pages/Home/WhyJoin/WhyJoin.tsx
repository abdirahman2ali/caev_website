import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import InsertChart from "@material-ui/icons/BarChart";
import CheckCircle from "@material-ui/icons/Check";
import Group from "@material-ui/icons/Group";
import AnalyticsClass from "./styles.module.scss";
//@ts-ignore
import Bounce from "react-reveal/Bounce";
const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
      backgroundColor: "rgb(239, 83, 80)"
    }
  },

  content: {
    "&$expanded": {
      margin: "12px 0",
      color: "white",

      transition: "0.5s ease-in background-color"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);
const WhyJoin = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <Box marginTop={15}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            className={AnalyticsClass.Title}
            component="h3"
            align="right"
          >
            Why Should I Join
            <span className="red"> Caev?</span>
          </Typography>
          <Bounce right>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={6}>
              <div className={AnalyticsClass.WhyJoin} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ExpansionPanel
                square
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <ExpansionPanelSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <InsertChart style={{ marginRight: "5px" }} />{" "}
                  <Typography component="h6" variant="h6" className="f400">
                    Analytics
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Leverage data analytics & insights to make better decisions
                    and grow your business.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
             
              <ExpansionPanel
                square
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <ExpansionPanelSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Group style={{ marginRight: "5px" }} />{" "}
                  <Typography component="h6" variant="h6" className="f400">
                    Grow your business
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Access to a wide variety of users that are looking for an
                    easy and simple to use ordering process.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel
                square
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <ExpansionPanelSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <CheckCircle style={{ marginRight: "5px" }} />{" "}
                  <Typography component="h6" variant="h6" className="f400">
                    Simple
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Simplify the planning process of your catering orders by
                    having a centralized system that keeps track of your orders.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          </Grid>
          </Bounce>
        </Container>
      </Box>
    </React.Fragment>
  );
};
export default WhyJoin;
