import CourseCard from "@/components/Course/CourseCard";
import React from "react";

function course() {
    return (
        <>
        <div className="bg-gray-100 p-5">
            <div className="w-1/2 bg-white p-10 rounded-xl shadow-xl m-auto ">
                <p className=" text-4xl font-bold mb-6">📘 ニューラルネットワーク</p>
                
                <div className="grid grid-cols-2 gap-5 mb-10">
                    <CourseCard
                        href={"/perceptron"}
                        title={"ニューラルネットワークの仕組み"}
                        desc={"脳を模倣して作られたニューラルネットワークについて"}
                    />

                    <CourseCard
                        href={"/renritu"}
                        title={"誤差逆伝播法の仕組み"}
                        desc={"微分の力を使って、パラメーターを最適化するアルゴリズム"}
                    />
{/* 
                    <CourseCard
                        href={"/course"}
                        title={"Affineレイヤ"}
                        desc={"行列を使ってニューラルネットワークの計算を楽に"}
                    /> */}
                </div>
                <p className=" text-4xl font-bold mb-6">📕 数学</p>

                <div className="grid grid-cols-2 gap-5 mb-10">
                    <CourseCard
                        href={"/renritu"}
                        title={"連立方程式"}
                        desc={"二つの方程式を連立したもの"}
                    />

                    <CourseCard
                        href={"/course"}
                        title={"微分 / 偏微分"}
                        desc={"その地点での傾きを求めることができる"}
                    />
                    {/* <CourseCard
                        href={"/course"}
                        title={"合成関数"}
                        desc={"複数の関数が入れ子になっているもの"}
                    />
                    <CourseCard
                        href={"/course"}
                        title={"連鎖率"}
                        desc={"複数の関数が入れ子になっている場合、簡単な計算で勾配を求めることができる"}
                    /> */}
                </div>


            </div>

        </div>

        </>
    )
}

export default course;
