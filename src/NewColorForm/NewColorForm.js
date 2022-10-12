import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const NewColorForm = ({addColor}) => {
  const initialState = {color: "#000000", name: ""}
  const history=useHistory();

  const [isTouched, setIsTouched] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    setIsTouched(true);
    const {name, value} = e.target;
    if(value === "") {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
    setFormData(data => ({...data, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!isInvalid) {
      history.push({
        pathname: '/colors',
      });
      const colorObj = {};
      colorObj[formData.name] = formData.color;
      addColor(colorObj);
      setFormData(initialState);
    }
  }
  return (
    <div className="NewColorForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="color">Pick a Color </label>
        <input name="color" type="color" onChange={handleChange} defaultValue="#000000"></input><br/>
        <label htmlFor="name">Name Your Color </label>
        <input name="name" type="text" onChange={handleChange}></input><br/>
        {isInvalid && isTouched && <span style = {{color: 'red'}}>You must name your color!</span>}
        <button type="submit">Save Color</button>
      </form>
    </div>
  )
}

export default NewColorForm;