import Form from "./components/Form"
import Drinks from "./components/Drinks"
import {Grid, makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    fontFamily: 'roboto, sans-serif'
  }
})

function App() {

  const classes = useStyles();

  return (
    <Grid 
    className={classes.root}
    container
    direction="column"
    alignItems="center"
    >
      <h1>Search For A Drink from TheCocktailDB</h1>
      <Form />
      <Drinks />
    </Grid>
  );
}

export default App;
