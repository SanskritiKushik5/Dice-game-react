import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "1rem",
  },
  button: {
    // padding: theme.spacing(1),
    // textAlign: 'center',
    color: "white",
    height: "3rem",
    fontSize: "1rem",
    marginTop: "1rem"
  },
}));

export default function NestedGrid({total}) {
  const classes = useStyles();
  const [select, setSelect] = useState(0)
  
  const handleClick = (e) => {
      setSelect(e.target.innerText)    
  }
  
  useEffect(() => {
    if (select == 0) {
        swal("Welcome!", "Click on any of the dice to start playing!", "info");
    } else if (total == select) {
        swal("Good job!", "You are a WINNER!", "success").then(()=> {window.location.reload()})
    } else {
        swal("Oops!", "Sorry, but you lost. Try again before the time runs up!", "error");
    }
  }, [select])
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>3</Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>4</Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>5</Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>6</Button>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>7</Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>8</Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>9</Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>10</Button>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>11</Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>12</Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>13</Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>14</Button>
            </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>15</Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>16</Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>17</Button>
            </Grid>
            <Grid item xs={3}>
                <Button className={classes.button} onClick={handleClick}>18</Button>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
