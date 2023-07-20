import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const CustomLink = ({ href, title }) => {
        const router = useRouter();
        return (
            <a
                href={href}
                className={`hover:text-primary-700  hover:text-gray-800 border-gray-700 relative group 
                    ${
                        router.asPath === href ? "text-black" : " text-gray-800"
                    }`}
            >
                {title}
                <span
                    className={`
                        h-[3px] inline-block bg-black absolute left-0 -bottom-2 group-hover:w-full transition-[width] ease duration-700
                        ${router.asPath === href ? "w-full" : "w-0"}
                    `}
                >
                    &nbsp;
                </span>
            </a>
        );
    };
    return (
        <header>
            <nav className=" px-6 py-4 bg-white border-b-2 border-gray-300">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        {/* <img
                            src="https://pbs.twimg.com/profile_images/1659863624163426305/AUZsJ_fs_400x400.jpg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        /> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
                            未踏福岡プロトタイプ
                        </span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <a
                            href="#"
                            className="text-black rounded-full text-sm px-5 py-2.5 mr-2 hover:bg-gray-300"
                        >
                            ログイン
                        </a>
                        <a
                            href="#"
                            className="text-white bg-gradient-to-r from-green-400 to-green-600 hover:bg-green-700  rounded-full text-sm px-5 py-2.5 mr-2   "
                        >
                            新規登録
                        </a>
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg lg:hidden  focus:outline-none focus:ring-2 ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <CustomLink href="/" title="ホーム" />
                            <CustomLink href="/course" title="コース一覧" />
                            <CustomLink href="/dashboard" title="ダッシュボード" />
                            <CustomLink href="/search" title="検索" />
                            {/* <CustomLink href="/p5" title="p5" />
                            <CustomLink href="/dom" title="DOM" />
                            <CustomLink href="/domclass" title="domclass" />
                            <CustomLink
                                href="/dom-neural"
                                title="dom-neural network"
                            />
                            <CustomLink href="/p5-neural" title="p5-neural" />
                            <CustomLink href="/js-canvas" title="XOR NN" />
                            <CustomLink href="/renritu" title="連立方程式" /> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
