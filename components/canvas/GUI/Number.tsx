import React, { useState } from "react";
import classes from "./Number.module.css";

const NumberCounter = ({ color = "#59C4DC", size=30}) => {
    const [number, setNumber] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const handleMouseDown = (event) => {
        event.preventDefault();
        let startX = event.clientX;
        let currentX = startX;

        const point = function (num, digit) {
            var time = Math.pow(10, digit);
            return Math.round(num * time) / time;
        };

        const updateNumber = (event) => {
            let deltaX = (event.clientX - currentX) /200;
            let distance = currentX - startX;
            currentX = event.clientX;
            let result = deltaX;

            setNumber((prevNumber) => {
                let updatedNumber = prevNumber + result;
                let min = -2
                let max=2
                if (updatedNumber > max) {
                    updatedNumber = max;
                } else if (updatedNumber < min) {
                    updatedNumber = min;
                } else if (point(updatedNumber, 2) === 0) {
                    updatedNumber = 0;
                }
                return updatedNumber;
            });
        };

        const stopUpdatingNumber = () => {
            document.removeEventListener("mousemove", updateNumber);
            document.removeEventListener("mouseup", stopUpdatingNumber);
            setIsMouseDown(false);
            setCursorStyle();

        };

        document.addEventListener("mousemove", updateNumber);
        document.addEventListener("mouseup", stopUpdatingNumber);
        
        setIsMouseDown(true);
            setCursorStyle("col-resize");

    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        
    };

    const handleMouseLeave = () => {
        setIsHovered(false);

    };

    return (
        <div
            id="number"
            onMouseDown={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`inline-block rounded-md`}
            style={{ fontSize: size }}
        >
            <p
                style={{
                    color: color,
                }}
                className={`${
                    isHovered || isMouseDown ? `${classes.forcusShadow}` : ""
                } font-serif hover:cursor-col-resize`}
            >
                {number > 0
                    ? `+${number.toFixed(2)}`
                    : number < 0
                    ? `−${Math.abs(number).toFixed(2)}`
                    : "±0.00"}
            </p>
        </div>
    );
};
function setCursorStyle(cursorStyle = "auto") {
    document.body.style.cursor = cursorStyle;
}
export default NumberCounter;
