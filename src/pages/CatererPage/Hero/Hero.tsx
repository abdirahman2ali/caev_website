import React from 'react';
import {QuickFacts} from './QuickFacts';
import Paper from '@material-ui/core/Paper';
import classes from "./Hero.module.scss";
type HeroProps = {
	name: string,
	location:string,
	tagline:string,
	image:string,
}

export const Hero = (props:HeroProps) =>{
	return(
		<React.Fragment>
			<Paper className={classes.hero} style={{ 
			 backgroundImage:'url('+props.image+')',
			 }} elevation={5}>
				<QuickFacts name={props.name} location={props.location} tagline={props.tagline}/>
			</Paper>
		</React.Fragment>
	)
};

//
// dark grey text in white