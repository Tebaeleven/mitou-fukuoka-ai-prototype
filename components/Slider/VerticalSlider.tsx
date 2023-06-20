import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function VerticalSlider() {

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

    return (
        <Box sx={{ height: 100 }}>
            <Slider
                sx={{
                    '& input[type="range"]': {
                        WebkitAppearance: "slider-vertical",
                    },
                }}
                marks={marks}
                orientation="vertical"
                valueLabelDisplay="auto"
            />
        </Box>
    );
}
