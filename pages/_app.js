import { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import {authService} from "../fb";

export default function home({Component, pageProps}) {
    let asdf = true;
    if (authService.currentUser) {
        asdf = true;
    } else {
        asdf = false;
    }
    return (
        <>
            <NavBar isLoggedIn={asdf} />
            <Component {...pageProps} />
        </>
    )
}

