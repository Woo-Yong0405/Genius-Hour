import Link from "next/link";
import { useEffect } from "react";
import { authService } from "../fb";
import i from "../pages/home.module.css";

export default function home(prop) {
    return (
        <>
            {prop.isLoggedIn ? (
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