import Link from "next/link";
import React from "react";

function CourseCard({href,title,desc}) {
    return(

        <>
            <Link  href={href} className="block max-w-md p-6 bg-white border border-gray-500 rounded-lg shadow-lg ">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-center">
                        {title}
                        </h5>
                    <p className="font-normal text-gray-700 text-center">
                        {desc}
                    </p>
                    <div className="text-center">
                    <button
                            className="text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-md text-sm px-5 py-2.5 mt-5 "
                        >
                            始める
                    </button>
                    </div>

            </Link>
        </>
    )
    
}

export default CourseCard;
