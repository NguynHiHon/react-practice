import React from "react";


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(">>>>>>>>>>> gọi hàm random")
    return color;
}
const Color = (CompontentWrap) => {

    const colorran = getRandomColor();

    return (props) => {
        return (
            <div style={{ color: colorran }}>
                <CompontentWrap {...props} />
*            </div>)
    }
}
export default Color;
