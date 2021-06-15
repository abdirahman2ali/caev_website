import React from 'react';
import Paper from '@material-ui/core/Paper';
import classes from './styles.module.scss';
import Search from './Search/Search';
/**
 * General componenent containing hero image and main search form
 */
const Hero:React.FC = () =>{
    return(
        <React.Fragment>
                 <Paper className={classes.hero}/>
                 <Search/>
        </React.Fragment>
    )
};

export default Hero;