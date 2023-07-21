import Side from "@/components/LearningDisplay/Side";
import SideCard from "@/components/LearningDisplay/SideCard";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";

const Canvas = dynamic(() => import("@/components/canvas/Canvas"), {
    ssr: false,
});

export default function JsCanvas() {
    //TODO
    //aタグから移動してきた時はcanvasを取得できるが、linkタグからだとできない
    return (
        <div className="pt-5 pb-20 px-10 flex bg-gray-100">
            <Side>
                <h1 className="text-3xl font-bold mb-4">XOR回路をニューラルネットワークで表現する</h1>
                <p className="mb-4">先ほどの動画で、XORのような非線形な問題は層を増やすことで解決できることがわかりました。</p>
                <p className="mb-4">早速、問題に取り組んでみましょう。</p>
                <SideCard
                    title={"XORが動作するようにパラメーターを調整してみよう"}
                    desc={"今のままだと、XORが正しく動作しません。実際に自分の手でパラメーターを動かしてXORが正しく動くようにしよう！"}
                >
                <div className="relative overflow-x-auto mt-6 mb-1 shadow-xl rounded-xl">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs bg-orange-500">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                            入力1
                            </th>
                            <th scope="col" className="px-6 py-3">
                            入力2
                            </th>
                            <th scope="col" className="px-6 py-3">
                            出力
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-white border-b ">
                            <th
                            scope="row"
                            className="px-6 py-4 font-medium text-black "
                            >
                            0
                            </th>
                            <td className="px-6 py-4 text-black">0</td>
                            <td className="px-6 py-4 text-black">0</td>
                        </tr>
                        <tr className="bg-white border-b">
                            <th
                            scope="row"
                            className="px-6 py-4 font-medium text-black "
                            >
                            0
                            </th>
                            <td className="px-6 py-4 text-black" >1</td>
                            <td className="px-6 py-4 text-black">1</td>
                        </tr>
                        <tr className="bg-white ">
                            <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                            >
                            1
                            </th>
                            <td className="px-6 py-4 text-black">1</td>
                            <td className="px-6 py-4 text-black">0</td>
                        </tr>
                        <tr className="bg-white ">
                            <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900"
                            >
                            1
                            </th>
                            <td className="px-6 py-4 text-black">0</td>
                            <td className="px-6 py-4 text-black">1</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                </SideCard>
            </Side>
            <div
                style={{
                    position: "relative",
                    width: "1280px",
                    backgroundColor: "#323233",
                }}
                className="m-auto rounded-xl shadow-2xl"
            >

                <canvas
                    id="root"
                    width={1280}
                    height={720}
                    className="rounded-2xl bg-black shadow-xl"
                    style={{ background: "black" }}
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
