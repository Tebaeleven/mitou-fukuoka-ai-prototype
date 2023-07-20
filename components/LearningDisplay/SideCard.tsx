import React from "react";

function sideCard({title,desc}) {
    return (
        <>
            <div className="block max-w-sm p-6 bg-gray-50 border border-gray-500 rounded-lg shadow  ">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 ">
                    {desc}
                </p>
                <button className="text-white bg-gray-900 hover:bg-black rounded-md text-sm px-5 py-2.5 mt-5 mr-4">
                    ヒント💡
                </button>
                <button className="text-white bg-green-600 hover:bg-green-800 rounded-md text-sm px-5 py-2.5 mt-5">
                    できた！
                </button>
            </div>
        </>
    );
}

export default sideCard;
