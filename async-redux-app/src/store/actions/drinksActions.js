import axios from "axios";

export const FETCH_DRINKS_START = "FETCH_DRINKS_START"
export const FETCH_DRINKS_SUCCESS = "FETCH_DRINKS_SUCCESS"
export const FETCH_DRINKS_FAIL = "FETCH_DRINKS_FAIL"

export const fetchDrinks = () => dispatch => {
    dispatch({ type: FETCH_DRINKS_START })
    axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}
