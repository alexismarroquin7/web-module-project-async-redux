import React, { useState } from "react";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";

import { fetchDrinks } from "../store/actions"

const Form = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.fetchDrinks(searchTerm)
    }

    return (
    <>
    <form onSubmit={handleSubmit}>
        <TextField 
            type="text"
            value={searchTerm}
            onChange={handleChange}
        />
        <Button type="submit">Fetch Drinks</Button>
    </form>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        drinkName: state.drinkName
    }
}

export default connect(mapStateToProps, { fetchDrinks })(Form);
