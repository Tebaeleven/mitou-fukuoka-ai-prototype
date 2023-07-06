import React, { useState } from "react";
import classes from "./Number.module.css";

const NumberCounter = () => {
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
            let deltaX = (event.clientX - currentX) / 100;
            let distance = currentX - startX;
            currentX = event.clientX;
            let result = deltaX;

            setNumber((prevNumber) => {
                let updatedNumber = prevNumber + result;
                if (updatedNumber > 1) {
                    updatedNumber = 1;
                } else if (updatedNumber < -1) {
                    updatedNumber = -1;
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
        };

        document.addEventListener("mousemove", updateNumber);
        document.addEventListener("mouseup", stopUpdatingNumber);
        setIsMouseDown(true);
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
            className={`inline-block text-4xl absolute top-10 left-24 rounded-md`}
        >
            <p
                style={{
                    color: "#59C4DC",
                }}
                className={`${
                    isHovered || isMouseDown ? classes.forcusShadow : ""
                } font-serif`}
            >
                {number.toFixed(2)}
            </p>
        </div>
    );
};

export default NumberCounter;
