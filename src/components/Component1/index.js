import React from 'react';
import { Grid } from '@material-ui/core';
import { Component2 } from "../";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(10),
    },
  }));

export default function Component1(props) {
  const classes = useStyles();
  return (
    <Grid
      direction="row"
      container
      justify="center"
      spacing={3}
      className={classes.root}
  >
      <Component2 textBody="work in progress" />
      <Component2 textBody="please be patient" />
    </Grid>
  );
}