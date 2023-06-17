import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const CustomLink = ({ href, title }) => {
        const router = useRouter();
        return (
            <Link
                href={href}
                className={`hover:text-primary-700  hover:text-white border-gray-700 relative group 
                    ${
                        router.asPath === href ? "text-white" : "text-gray-400 "
                    }`}
            >
                {title}
                <span
                    className={`
                        h-[3px] inline-block bg-white absolute left-0 -bottom-2 group-hover:w-full transition-[width] ease duration-700
                        ${router.asPath === href ? "w-full" : "w-0"}
                    `}
                >
                    &nbsp;
                </span>
            </Link>
        );
    };
    return (
        <header>
            <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                        {/* <img
                            src="https://pbs.twimg.com/profile_images/1659863624163426305/AUZsJ_fs_400x400.jpg"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        /> */}
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                            未踏福岡プロトタイプ
                        </span>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <a
                            href="#"
                            className="text-gray-800 dark:text-white  focus:ring-4  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
                        >
                            ログイン
                        </a>
                        <a
                            href="#"
                            className="text-gray-800 dark:text-white  focus:ring-4  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
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
                            <CustomLink href="/" title="Home" />
                            <CustomLink href="/p5" title="p5" />
                            <CustomLink href="/dom" title="DOM" />
                            <CustomLink href="/Features" title="Features" />
                            <CustomLink href="/Team" title="Team" />
                            <CustomLink href="/contact" title="Contact" />
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
