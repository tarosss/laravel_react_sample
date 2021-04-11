import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();


function Post(){
    
    const json = {
      "taskName":  "dummy",
      "taskContents": "dummydummydummydummydummydummy",
      "isDone": false,
    }
    axios.post("api/alltasks", json)
    .then(res => {
      console.log("ededd",res)
    })
    //const item = res.data
    //console.log(item)

  }
  
  return (
    <div>
    <form onSubmit={Post}>
      <button type="submit" value="送信する">送信する</button>
    </form>

  </div>

  )
}
