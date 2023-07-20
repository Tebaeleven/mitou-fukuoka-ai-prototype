import React from "react";

function side({children}) {
    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow-md w-1/4 border-solid border-2 border-gray-300">
                {children}
            </div>
        </>
    );
}

export default side;
