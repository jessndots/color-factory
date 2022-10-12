import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "./Color.css"

const Color = ({getColor}) => {
  const history = useHistory();
  const {colorName} = useParams()
  const color = getColor(colorName);
  if (!color) {
    history.push("/colors")
  }
  return (
    <div className="Color" style={{backgroundColor: color}}>
      <div className="Color-text">
        <h1 >This color is called {colorName}!</h1>
        <Link to="/colors">Go Back</Link>
      </div>

    </div>
  )
}

export default Color;