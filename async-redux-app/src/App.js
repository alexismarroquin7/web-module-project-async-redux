import Form from "./components/Form"
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    fontFamily: 'roboto, sans-serif'
  }
})

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Search For A Drink from TheCocktailDB</h1>
      <Form />
    </div>
  );
}

export default App;
