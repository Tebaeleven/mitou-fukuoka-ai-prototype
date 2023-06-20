import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
    {
        value: 0,
        label: "0",
    },
    {
        value: 100,
        label: "100",
    },
];

function valuetext(value: number) {
    return `${value}°C`;
}

export default function DiscreteSliderLabel() {
    return (
        <Box sx={{ width: 100 }}>
            <Slider
                aria-label="Always visible"
                defaultValue={80}
                marks={marks}
                valueLabelDisplay="auto"
                color="secondary"
            />
        </Box>
    );
}
