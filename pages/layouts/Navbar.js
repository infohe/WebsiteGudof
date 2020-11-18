import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import { ArrowDropDown } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  padding: {
    paddingRight:theme.spacing(3)
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            gudof
          </Typography>
          <Typography edge="end" variant="h6" className={classes.padding}>
            Home
          </Typography>
          <Typography edge="end" variant="h6" className={classes.padding}>
            About
          </Typography>
          <Typography edge="end" variant="h6" className={classes.padding}>
            News
            <IconButton edge="start" color="inherit" aria-label="menu">
            <ArrowDropDown />
          </IconButton>
          </Typography>
          <Typography edge="end" variant="h6" className={classes.padding}>
            Next
            <IconButton edge="start" color="inherit" aria-label="menu">
            <ArrowDropDown />
          </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}