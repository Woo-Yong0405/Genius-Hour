import Link from "next/link";
import { authService } from "../fb";
import i from "../pages/home.module.css";

export default function home(prop) {
    const asdf = Boolean(authService.currentUser !== null)
    return (
        <>
            {asdf ? (
                <div className={i.n}>
                    <h1>Welcome Back!</h1>
                </div>
            ):(
                <div className={i.n} >
                    <h1>Welcome!</h1>
                    <p>If you are already a member but did not log out the last time you visited, click <Link href="/">here</Link></p>
                    <p>If you are already a member but logged out the last time you visited, log in <Link href="/login">here</Link>. If you are new, sign up <Link href="/signup">here</Link></p>
                </div>
            )}
        </>
    )
}