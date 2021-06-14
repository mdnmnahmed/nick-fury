import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import OptionButton from './OptionButton';
import useStyles from './navStyles';

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Hii {'user'}
                    </Typography>
                    <OptionButton />
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;