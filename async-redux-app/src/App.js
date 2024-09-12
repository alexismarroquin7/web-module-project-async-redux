import Form from "./components/Form"
import Drinks from "./components/Drinks"
import {Grid, makeStyles, Typography} from "@material-ui/core"

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
      <Typography variant="h3">Search For A Drink from TheCocktailDB</Typography>
      <Form />
      <Drinks />
    </Grid>
  );
}

export default App;
