import React from "react";
import { connect } from "react-redux";

import Drink from "./Drink"

import { Grid, Typography } from "@material-ui/core"

const Drinks = (props) => {
    return (
    <Grid
    container
    direction="row"
    justify="space-evenly">
    {props.isLoading ? <Typography>Loading Drinks...</Typography> : null}
    {props.error ? <Typography>{props.error}</Typography> : null}
    {props.drinks.map(drink => (
        <Drink key={drink.idDrink} drink={drink}/>
    ))}
    </Grid>
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

export default connect(mapStateToProps)(Drinks);