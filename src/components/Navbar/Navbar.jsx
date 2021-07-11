import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import logo from "../../assets/logo.jpeg";
import useStyles from "./styles";
import {Link, useLocation} from "react-router-dom";

function Navbar({totalItems}) {
    const classes = useStyles();
    const location = useLocation();

  
    return (
        <>
            <AppBar position="fixed" className={classes.AppBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Hair Station" height="30px" className={classes.image} />
                        Hair Station
                    </Typography>
                    <div className="cartButton">
                    <div className={classes.grow} />
                    {location.pathname === "/" && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" className={classes.cart} aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary"></Badge>
                            <ShoppingCart />
                        </IconButton>
                        </div> )} 
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
