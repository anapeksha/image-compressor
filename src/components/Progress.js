import React from 'react';
import {CircularProgress} from "@mui/material";
import handleProgress from '../controllers/handleProgress';

function Progress(props) {
  return <CircularProgress variant="determinate" value={props.handleProgress} />;
}

export default Progress