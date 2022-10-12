import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Colors from "../Colors/Colors";
import Color from "../Color/Color";
import NewColorForm from "../NewColorForm/NewColorForm";

const Routes = () => {
  
  const INITIAL_STATE = JSON.parse(localStorage.getItem("colors")) || {}
  const [colors, setColors] = useState(INITIAL_STATE)
  
  useState(()=> {
    localStorage.setItem("colors", JSON.stringify(colors))
  }, [colors])

  const addColor = (colorObj) => {
    setColors(colors => ({...colors, ...colorObj}));
  }

  const getColor = (name) => {
    const hex = colors[name];
    return hex
  }
  return (
    <div className="Routes">
      <Switch>
        <Route path="/colors/new"><NewColorForm addColor={addColor}/></Route>
        <Route path="/colors/:colorName"><Color getColor={getColor}/></Route>
        <Route path="/colors"><Colors colors={colors}/></Route>
        <Redirect to="/colors"/>
      </Switch>
    </div>
  )
}

export default Routes