import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/globals.css";
import {authService} from "../fb";

export default function Home({Component, pageProps}) {
    const [asdf, setAsdf] = useState(false)
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                setAsdf(true)
            }
        })
    })
    return (
        <>
            <NavBar isLoggedIn={asdf} />
            <div id="as">
                <Component isLoggedIn={asdf} {...pageProps} />
            </div>
        </>
    )
}

