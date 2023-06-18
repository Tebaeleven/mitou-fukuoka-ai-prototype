import { useEffect, useState } from "react";

export default function Neuron ({ children,v, r = "100", t, wait }){
    const [isVisible, setIsVisible] = useState(false);
    let x=v[0]
    let y=v[1];
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, wait*200);

        return () => clearTimeout(timeout);
    }, [wait]);

    return (
        <>
            {isVisible && (
                <>
                    <div
                        className="rounded-full bg-white border-black border-2  fadein"
                        style={{
                            position: "absolute",
                            top: Number(y) - Number(r) / 2,
                            left: Number(x) - Number(r) / 2,
                            width: Number(r),
                            height: Number(r),
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {/* {t && (
                            <>
                                <div className="flex justify-center items-center">
                                    <p className="font-bold select-none">{t}</p>
                                </div>
                            </>
                        )} */}
                        <div className="font-bold select-none">
                            {children}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};