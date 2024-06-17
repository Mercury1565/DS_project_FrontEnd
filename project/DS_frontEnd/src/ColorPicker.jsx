import React, {useState} from 'react'; 

function ColorPicker() 
{
    const [color, setColor] = useState("#FFFFFF");
    
    return(
        <div className = "color-picker-containter">
            <h1>Color Picker</h1>
            <div className = "color_display" style = {{backgroundColor: color}}>
                <p>Selected Color : {color} </p>
            </div>
            <label>Select a Color: </label>
            <input type = "color" value = {color} onChange = {(e) => setColor(e.target.value)} />
        </div>
    );
}

export default ColorPicker;