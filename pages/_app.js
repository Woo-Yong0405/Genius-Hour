import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import {authService} from "../fb";

export default function home({Component, pageProps}) {
    let asdf = true;
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                asdf = false;
            }
        })
    })
    return (
        <>
            <NavBar isLoggedIn={asdf} />
            <Component {...pageProps} />
        </>
    )
}

