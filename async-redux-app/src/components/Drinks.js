import React, { useEffect } from "react";
import { connect } from "react-redux";

import Drink from "./Drink"

import { fetchDrinks } from "../store/actions"

import { Grid, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    isLoading: {
        marginBottom: "2%"
    },
    error: {
        marginBottom: "2%",
        color: "red"
    }
})

const Drinks = (props) => {

    useEffect(() => {
        props.fetchDrinks(`margarita`);
    }, []);

    const classes = useStyles();

    return (
    <>
    <Grid
    container
    direction="column"
    alignItems="center"
    >
    {props.isLoading ? <Typography className={classes.isLoading} varitant="body1">Loading Drinks...</Typography> : null}
    {props.error ? <Typography className={classes.error} >{props.error}</Typography> : null}
    </Grid>
    <Grid
    container
    direction="row"
    justify="space-evenly">
    {props.drinks.map(drink => (
        <Drink key={drink.idDrink} drink={drink}/>
    ))}
    </Grid>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        drinks: state.drinks,
        isLoading: state.isLoading,
        error: state.error,
        drinkName: state.drinkName
    }
}

const mapDispatchToProps = () => {
    return {
        fetchDrinks
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Drinks);