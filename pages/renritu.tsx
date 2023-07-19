import dynamic from "next/dynamic";
import React, { useEffect } from "react";

const Canvas = dynamic(() => import("@/components/canvas/rentiru"), {
    ssr: false,
});

export default function JsCanvas() {
    //TODO
    //aタグから移動してきた時はcanvasを取得できるが、linkタグからだとできない
    return (
        <div className="p-10 flex bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md w-1/4 border-solid border-2 border-gray-300">
                <h1 className="text-3xl font-bold mb-4">誤差逆伝播法の仕組み</h1>
                <p className="mb-4">先ほどの動画で分かる通り、誤差逆伝播法は合成関数の特性を使い、後ろ向きから各パラメーターの変化量を求めていました。</p>
                <p className="mb-4">早速、演習に取り組んでみましょう。</p>

                <div className="block max-w-sm p-6 bg-gray-50 border border-gray-500 rounded-lg shadow  ">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">どのパラメーターが最も変化量が大きいですか？</h5>
                    <p className="font-normal text-gray-700 ">誤差逆伝播を使って、実際にどのパラメーターが一番変化するか調べてみましょう。</p>
                    <button
                            className="text-white bg-gray-900 hover:bg-black rounded-md text-sm px-5 py-2.5 mt-5 mr-4"
                        >
                            ヒント💡
                    </button>
                    <button
                            className="text-white bg-green-600 hover:bg-green-800 rounded-md text-sm px-5 py-2.5 mt-5"
                        >
                            できた！
                    </button>
                </div>
                <div className="m-5"></div>
                <div className="block max-w-sm p-6 bg-gray-50 border border-gray-500 rounded-lg shadow  ">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">W11の重みを知るためにはどのような手順を踏めば良いですか？</h5>
                    <p className="font-normal text-gray-700 ">誤差逆伝播で、この重みの変化量を調べるためにはどのような手順を踏めば良いのでしょうか？実際に手を動かして変化量を求める式を導出してみましょう💪</p>
                    <button
                            className="text-white bg-gray-900 hover:bg-black rounded-md text-sm px-5 py-2.5 mt-5 mr-4"
                        >
                            ヒント💡
                    </button>
                    <button
                            className="text-white bg-green-600 hover:bg-green-800 rounded-md text-sm px-5 py-2.5 mt-5 "
                        >
                            できた！
                    </button>
                </div>


                <h2></h2>
            </div>
            <div
                style={{
                    position: "relative",
                    width: "1280px",
                    backgroundColor: "#323233",
                }}
                
                className="m-auto rounded-xl shadow-xl"
            >
                <canvas
                    id="root"
                    width={1280}
                    height={720}
                    className="drop-shadow-2xl rounded-2xl bg-black shadow-xl"
                ></canvas>

                {/* <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                    className="bg-white rounded-md m-2 p-2"
                >
                    Neural Network XOR
                </div> */}
                <Canvas></Canvas>
            </div>
        </div>
    );
}
