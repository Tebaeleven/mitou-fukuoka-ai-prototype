import Image from "next/image";
import Header from "@/components/Header/header";
import dynamic from "next/dynamic";
import { Skeleton } from "@mui/material";

export default function Home() {
    return (
        <>
        <div className=" py-10 bg-gray-50">

            <div className="block  border bg-white  rounded-lg shadow border-gray-200 m-auto  h-[700px] w-[1200px]">
                {/* <div className="block  bg-white border border-gray-200 rounded-lg shadow  p-5 w-10"></div> */}
            </div>
        </div>

        </>
    );
}
