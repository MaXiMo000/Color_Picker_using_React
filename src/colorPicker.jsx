import React, {useState} from "react";

function ColorPicker(){
    const [color, setColor] = useState("#564b64");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-container">
            <h1 className="color-picker-heading" style={{color: color}}>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <div className="color-select">
                <label>Select a Color: </label>
                <input type="color" onChange={handleColorChange} value={color} />
            </div>
        </div>
    );
}

export default ColorPicker;