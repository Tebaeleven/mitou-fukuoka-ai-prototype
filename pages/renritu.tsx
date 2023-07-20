import dynamic from "next/dynamic";
import React, { useEffect } from "react";

const Canvas = dynamic(() => import("@/components/canvas/rentiru"), {
    ssr: false,
});
import Side from "@/components/LearningDisplay/Side"
import SideCard from "@/components/LearningDisplay/SideCard"

export default function JsCanvas() {
    //TODO
    //aタグから移動してきた時はcanvasを取得できるが、linkタグからだとできない
    return (
        <div className="pt-5 pb-20 px-10 flex bg-gray-100">
            <Side>
                <h1 className="text-3xl font-bold mb-4">誤差逆伝播法の仕組み</h1>
                <p className="mb-4">先ほどの動画で分かる通り、誤差逆伝播法は合成関数の特性を使い、後ろ向きから各パラメーターの変化量を求めていました。</p>
                <p className="mb-4">早速、演習に取り組んでみましょう。</p>
                <SideCard
                    title={"どのパラメーターが最も変化量が大きいですか？"}
                    desc={"誤差逆伝播を使って、実際にどのパラメーターが一番変化するか調べてみましょう。"}
                />
                <div className="m-5"></div>
                <SideCard
                    title={"W11の重みを知るためにはどのような手順を踏めば良いですか？"}
                    desc={"誤差逆伝播で、この重みの変化量を調べるためにはどのような手順を踏めば良いのでしょうか？実際に手を動かして変化量を求める式を導出してみましょう💪"}
                />
            </Side>

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
