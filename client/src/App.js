import React from 'react';
import MainDrawer from "./components/main/MainDrawer"
import  {useStyles} from "./components/styles/Styles"

import './App.css';

function App() {
  const classes = useStyles();
  return (
   <MainDrawer classes={classes}/>
  );
}

export default App;
