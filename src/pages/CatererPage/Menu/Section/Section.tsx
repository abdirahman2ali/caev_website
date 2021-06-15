import React from 'react';
import Typography from '@material-ui/core/Typography';


export const Section = (props: {title:string, children:any}) => {
    return (
        <React.Fragment>
              <hr style={{border:'none', borderBottom:'1px solid rgba(0,0,0,0.3)', width:'80%', textAlign:'center', marginTop:'20px'}}/>
            <Typography variant="h4" component="h4" align="center" 
                style={{}}> 
            <span className="red"> {props.title}</span>
            </Typography>
            <hr style={{border:'none', borderBottom:'1px solid rgba(0,0,0,0.3)', width:'80%', textAlign:'center'}}/>
            <div style={{marginTop:'40px'}}>

         
            {props.children}
            </div>
        </React.Fragment>
    )
}