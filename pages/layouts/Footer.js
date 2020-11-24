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
import { grey } from "@material-ui/core/colors";
import { Box, Grid, List } from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
 
  
}));
const links = [
    {head:"About",body:['link1','link2','link3']},
    {head:"Contact",body:['link4','link5','link6']},
    {head:"heading",body:['link71','link29','link8']},
    {head:"Social",body:['fb','twitter','youtube']},

];
export default function Footer(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0}>
        {links.map(
            item =>
            <Grid item xs={6} sm={3}>
            <Box  bgcolor="text.primary" color="background.paper" p={4}>
              <Box className={classes.heading} color={"#cccccc"}>
                  {item.head}
              </Box>
              <List>
                {item.body.map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
              </List>
            </Box>
        </Grid>
        )}
        
      </Grid>
     
    </div>
  );
}