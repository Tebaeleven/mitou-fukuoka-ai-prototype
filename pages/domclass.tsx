import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";

export default function DomClass() {
        useEffect(() => {
            let x = 0
            const container = document.getElementById("root");
            const button = document.getElementById("b");
            console.log(button.style.top);
            const interval = setInterval(() => {
                button.style.left = `${x}px`;
                x++;
            }, 1); // 1秒ごとに移動

            return () => {
                clearInterval(interval);
            };
        }, []);
    return (
        <div
            className="block  bg-white border  rounded-lg shadow border-gray-700 m-auto my-5 h-[700px] w-[1200px] "
            id="root"
            style={{ position: "relative" }}
        >
            <Button id="b" style={{ position:"absolute",top:0}}>こんにちは</Button>
        </div>
    );
}


