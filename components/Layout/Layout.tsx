import React from "react";
import Header from "@/components/Header/header"
import Footer from "@/components/Footer/Footer";
export default function Layout({children}) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
