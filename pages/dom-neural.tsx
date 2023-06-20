import React, { useEffect, useState } from "react";
import Neuron from "@/components/DOM/neuron";
import Line from "@/components/DOM/line";
import DiscreteSliderLabel from "@/components/Slider/DiscreteSliderLabel";
import VerticalSlider from "@/components/Slider/VerticalSlider";

export default function P5Neural() {
    const [X1, setX1] = useState(0);

    const handleSizeChange = (event) => {
        setX1(event.target.value);
        console.log(X1)
    };
    let G = {
        V: [
            [X1+200, 200], // x1
            [200, 400], // x2
            [500, 300], // y
        ],
    };
    console.log(G.V[0])
    let v = G.V[0];
    console.log(v[0])
    return (
        <div
            className="block bg-white border rounded-lg shadow border-gray-700 m-auto my-5 h-[700px] w-[1200px]"
            id="root"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <Neuron v={G.V[0]} t="1" wait={1}>
                x1
            </Neuron>

            <Neuron v={G.V[1]} t="1" wait={2}>
                x2
            </Neuron>

            <Neuron v={G.V[2]} t="1" wait={3}>
                y
            </Neuron>

            <svg width={1000} height={500}>
                <Line start={G.V[0]} end={G.V[2]} wait={5}></Line>
                <Line start={G.V[1]} end={G.V[2]} wait={6}></Line>
            </svg>

            {/* <Slider color="blue" defaultValue={50} className="w-40 absolute top-20 left-10" />
            <Slider color="red" defaultValue={50} className="w-40" />
            <Slider color="green" defaultValue={50} className="w-40" />
            <Slider color="amber" defaultValue={50} className="w-40" /> */}
            <div className="flex w-96 flex-col gap-8">
                {/* <Slider
                    onChange={handleSizeChange}
                    max={100}
                    value={X1}

                    // style={{ position: "absolute", top: 100, left: 260 }}
                /> */}
                <div style={{ position: "absolute", top: 170, left: 300 }}>
                    <DiscreteSliderLabel></DiscreteSliderLabel>
                </div>
                <div style={{ position: "absolute", top: 400, left: 300 }}>
                    <DiscreteSliderLabel></DiscreteSliderLabel>
                </div>
                <div style={{ position: "absolute", top: 150, left: 60 }}>
                    <VerticalSlider></VerticalSlider>
                </div>
                <div style={{ position: "absolute", top: 350, left: 60 }}>
                    <VerticalSlider></VerticalSlider>
                </div>
                <div style={{ position: "absolute", top: 290, left: 570 }}>
                    <DiscreteSliderLabel></DiscreteSliderLabel>
                </div>
            </div>
        </div>
    );
}

