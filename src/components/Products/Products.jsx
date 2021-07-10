import React from "react";
import {Grid} from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from "./styles";

const products = [
    {id: 1, name: "Restore", 
    description: "Restore is a powerful hair mask packed with nutrients to fortify and restore severily damaged hair.",
    price: "$20", image: "https://www.christinamossnaturals.com/wp-content/uploads/2016/11/Hair-Mask-1.jpg"},
    {id: 2, name: "Revive", 
    description: "Revive is an impactful hair conditioner that revives your hair color so you can maintain a longer lasting look.",
    price: "$15", image: "https://www.christinamossnaturals.com/wp-content/uploads/2016/01/CONDITIONER-FINAL-VIEW1.jpg"},
];

const Products = () => {
    const classes = useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container  justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} TropicalCoconut={12} DelicateFloral={6} FreshOrange={4}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
};
   

export default Products;