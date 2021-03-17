import React from "react";
import { connect } from "react-redux";

import Drink from "./Drink"

const Drinks = (props) => {
    return (
    <>
    {props.isLoading ? <h3>Loading Drinks...</h3> : null}
    {props.error ? <h3>{props.error}</h3> : null}
    {props.drinks.map(drink => (
        <Drink key={drink.idDrink} drink={drink}/>
    ))}
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

export default connect(mapStateToProps)(Drinks);