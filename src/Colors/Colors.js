import React from "react";
import { Link } from "react-router-dom";
import "./Colors.css"


const Colors = ({ colors }) => {
  return (
    <div className="Colors">
      <h1>The Color Factory</h1>
      <Link to="/colors/new">Create a color!</Link><br /><br />
      {Object.keys(colors).length > 0 ? (
        <div>
          <h2>My Colors</h2>
          {Object.keys(colors).map(colorName => (
            <div key={colorName}>
              <Link className="ColorName" to={`/colors/${colorName}`} >{colorName}</Link><br />
            </div>
          ))}
        </div>
      ) : null}
    </div >
  )
}

export default Colors;