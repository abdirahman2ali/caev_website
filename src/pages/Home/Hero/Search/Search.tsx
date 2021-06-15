import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InputField from "./InputField/InputField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./styles.module.scss";
import Grid from "@material-ui/core/Grid";
import SelectField from './SelectField/SelectField';
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { Link } from "react-router-dom";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";


/**
 * General componenet for hero search form
 */
const Search = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date()
  );

  function handleDateChange(date:any) {
    setSelectedDate(date);
  }

  return (
    <React.Fragment>
      <Container
        maxWidth={false}
        fixed
        style={{ maxWidth: "550px", boxSizing: "border-box", padding: "40px"}}
        className={classes.HeroSearch}
      >
        <Box boxShadow={3}>
          <Paper elevation={9} className={classes.Padding}>
            <Box component="span" m={5}>
              <Typography variant="h3" component="h3" align="center" className={classes.Title}>
                <span style={{ color: "#ef5350" }}>Ca</span>ter to{" "}
                <span style={{ color: "#ef5350" }}>Ev</span>ents
              </Typography>
              <Typography variant="h6" component="h6" align="center" className={classes.Title}>
                Book a unique caterer.
              </Typography>
            </Box>

            <form autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <InputField label="Where" placeholder="Anywhere"/>
                </Grid>
                <Grid item xs={6} sm={6}>
                <div className={classes.SelectField}>
                 <SelectField /> </div>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      margin="normal"
                      id="mui-pickers-date"
                      label="Date picker"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                      className={classes.SelectField}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>

                <Grid item xs={12}>
                  <InputField label='Guests' placeholder="Guests" />
                </Grid>

                <Grid item xs={8} />
                <Grid item xs={4}>
                <Link to="/comingsoon">  <Button
                    variant="contained"
                    color="primary"
                    className={classes.rightIcon}
                  >
                    SEARCH
                    <SearchIcon style={{marginLeft:'5px'}} />
                  </Button></Link>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Search;
