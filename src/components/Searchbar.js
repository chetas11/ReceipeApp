import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));


const InputField = (props) =>{
    const classes = useStyles();
    return(
        <div>
            <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Search your Receipe"
                inputProps={{ 'aria-label': 'Search your Receipe' }}
                onChange={props.onInputChnage}  
                value={props.value}
            />
            <IconButton onClick={props.handleClick} className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            </Paper>
        </div>
    )
}

export default InputField;