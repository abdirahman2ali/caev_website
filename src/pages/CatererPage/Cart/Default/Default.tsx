import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classes from './styles.module.scss';
import Paper from '@material-ui/core/Paper';
const Default = () => {
    return (
        <React.Fragment>

           
<Paper style={{height:'100vh',padding:'10px', marginRight:'0px  !important', position:'fixed', right:'0px  !important',marginLeft:"43px"}} elevation={8}>
            <Box mt={25} alignContent="center" alignSelf="center" p={5}>
                <div className={classes.box}>
                    <div className={classes.center}>
                        <ShoppingCartIcon className="red" style={{ fontSize: '6.4em' }} />
                    </div>
                </div>
                <Typography variant="h6" component="h6" align="center">
                    Start your order
                </Typography>
                <Typography variant="body2" component="p" align="center">
                    Start adding items to your shoppping cart
                </Typography>
                <div className={classes.box} style={{ marginTop: '10px' }}>
                    <div className={classes.center}>
                        <Button color="primary" variant="contained" href="/register">
                            Get Started
                </Button>
                    </div>
                </div>

            </Box>
</Paper>
        </React.Fragment>
    )
}

export default Default;