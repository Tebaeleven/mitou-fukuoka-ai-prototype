import dynamic from "next/dynamic";
import React, { useEffect } from "react";

const Canvas = dynamic(() => import("@/components/canvas/perceptron"), {
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
                <h1 className="text-3xl font-bold mb-4">パーセプトロンを使ってORを表現する</h1>
                <p className="mb-4">先ほどの映像で、パーセプトロンを使えば線で分割可能なものは表現できることを学びました。</p>
                <p className="mb-4">早速、問題に取り組んでみましょう。</p>
                <SideCard
                    title={"OR回路と同じ動きをするパラメーターを見つけてみよう"}
                    desc={"実際にエディターのパーセプトロンの重みやパラメーターを動かして、OR回路と同じように動くようにしよう！"}
                />
                <div className="m-5"></div>

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
