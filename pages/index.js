import Link from "next/link";
import { useEffect } from "react";
import { authService } from "../fb";
import i from "../pages/home.module.css";

export default function home() {
    let asdf;
    useEffect(()=>{
        asdf = true
        authService.onAuthStateChanged((user) => {
            if (user.uid) {
                asdf = true;
            }
        })
        console.log(asdf)
    }, [])
    return (
        <>
            {asdf ? (
                <div className={i.n}>
                    <h1>Welcome Back!</h1>
                </div>
            ):(
                <div className={i.n} >
                    <h1>Welcome!</h1>
                    <p>If you are already a member, log in <Link href="/login">here</Link>. If you are new, sign up <Link href="/signup">here</Link></p>
                </div>
            )}
        </>
    )
}