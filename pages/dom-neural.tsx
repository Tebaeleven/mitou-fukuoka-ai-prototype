import React, { useEffect, useState } from "react";
import Neuron from "@/components/DOM/neuron";
import Line from "@/components/DOM/line";



export default function p5Neural() {
    return (
        <div
            className="block bg-white border rounded-lg shadow border-gray-700 m-auto my-5 h-[700px] w-[1200px]"
            id="root"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <Neuron x="200" y="100" t="1" wait={1}>
                1
            </Neuron>
            <Neuron x="200" y="200" t="2" wait={2}>
                2
            </Neuron>
            <Neuron x="200" y="300" t="3" wait={3}>
                3
            </Neuron>
            <Neuron x="400" y="200" t="4" wait={4}>
                4
            </Neuron>
            <svg width={1000} height={1000}>
                <Line x1={200} y1={100} x2={400} y2={200} wait={5}></Line>
                <Line x1={200} y1={200} x2={400} y2={200} wait={6}></Line>
                <Line x1={200} y1={300} x2={400} y2={200} wait={7}></Line>
            </svg>
        </div>
    );
}
