import React from "react";
import dynamic from "next/dynamic";

const MaterialsComponents = dynamic(() => import("@/components/Sketch/Materials"), {
    ssr: false,
});

export default function p5() {
    return (
        <div className="block  bg-white border  rounded-lg shadow border-gray-700 m-auto my-5 h-[700px] w-[1200px]">
            <MaterialsComponents />;
        </div>
    );
}
