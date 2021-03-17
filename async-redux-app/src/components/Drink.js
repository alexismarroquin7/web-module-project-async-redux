import React from "react"

const Drink = (props) => {
    
    const {drink} = props;

    return (
    <>
    {drink.strDrink}
    </>
    )
}

export default Drink;
