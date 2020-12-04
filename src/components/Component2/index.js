import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
      background: '#FFF8E1',
    },
  }));

export default function Component2(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper} elevation={5}>
        <Typography>
          {props.textBody}
        </Typography>
      </Paper>
    </Grid>
  );
}