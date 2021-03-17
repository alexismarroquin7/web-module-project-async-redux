import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const Form = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = e => {
        setSearchTerm(e.target.value)
    }

    return (
    <>
    <form>
        <TextField 
            type="text"
            value={searchTerm}
            onChange={handleChange}
        />
        <Button>Fetch Drinks</Button>
    </form>
    </>
    )
}

export default Form;
