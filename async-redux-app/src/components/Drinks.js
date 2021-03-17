import React from "react";
import { connect } from "react-redux";

import Drink from "./Drink"

const Drinks = (props) => {
    return (
    <>
    <p>Drinks</p>
    {props.drinks.map(drink => (
        <Drink drink={drink}/>
    ))}
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        drinks: state.drinks
    }
}

export default connect(mapStateToProps)(Drinks);