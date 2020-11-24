import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import { ArrowDropDown } from "@material-ui/icons";
import { Box, Grid } from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },

}));

export default function ListofItems(props) {
  const classes = useStyles();

  return (
    <Fragment>
       <Grid container spacing={0}>
            <Grid item xs={6} sm={3}>
            <Box  bgcolor="primary.main" color="background.paper" p={4}>
              Search
            </Box>
        </Grid>
       
        
      </Grid>
    </Fragment>
  );
}