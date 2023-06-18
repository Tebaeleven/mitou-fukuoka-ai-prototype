import React, { useEffect, useRef, useState } from "react";
import anime from "animejs";

export default function Line({ x1, y1, x2, y2, wait }) {
    const lineRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const line = lineRef.current;

        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, wait*200);

        return () => {
            clearTimeout(timeout);
        };
    }, [wait]);

    useEffect(() => {
        if (isVisible) {
            const line = lineRef.current;

            anime({
                targets: line,
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: "easeInOutSine",
                duration: 1000,
            });
        }
    }, [isVisible]);

    return (
        <>
            {isVisible && (
                    <line
                        ref={lineRef}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="black"
                        strokeWidth="3"
                    />
            )}
        </>
    );
}
