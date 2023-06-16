import Image from "next/image";
import Header from "@/components/Header/header";
import dynamic from "next/dynamic";
const SketchComponents = dynamic(() => import("@/components/Sketch/sketch"), {
    ssr: false,
});

export default function Home() {
    return (
        <>
            <div className="block  bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700 m-auto my-5 h-[700px] w-[1200px]">
                {/* <div className="block  bg-white border border-gray-200 rounded-lg shadow  p-5 w-10"></div> */}
                <SketchComponents size="100" />
                
            </div>
        </>
    );
}
