import React, { useState } from "react";
import { connect } from "react-redux";
import { TextField, Button, Grid, makeStyles } from "@material-ui/core";

import { fetchDrinks } from "../store/actions"

const useStyles = makeStyles({
    form: {
        marginBottom: "2%"
    },
    textField: {
        minWidth: "420px"
    }
})

const Form = (props) => {

    const [searchTerm, setSearchTerm] = useState('');

    const classes = useStyles();

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.fetchDrinks(searchTerm)
        setSearchTerm('')
    }

    return (
    <>
    <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container
        direction="column"
        alignItems="flex-end"
        >
        <TextField 
            className={classes.textField}
            label="Enter a drink name:"
            helperText="i.e. 'margarita'"
            type="text"
            value={searchTerm}
            onChange={handleChange}
            variant="filled"
        />
        <Button type="submit" variant="contained" size='small'>Fetch Drinks</Button>
        </Grid>
    </form>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        drinkName: state.drinkName,
    }
}

export default connect(mapStateToProps, { fetchDrinks })(Form);
