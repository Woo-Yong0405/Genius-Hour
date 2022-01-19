import Link from "next/link";
import { useRouter } from "next/router";
import s from "../components/NavBar.module.css";

export default function NavBar(prop) {
    const router = useRouter()
    console.log(prop.isLoggedIn)
    return (
        <div className={s.bar}>
        <h2 className={s.logo}><Link href="/">MCA</Link></h2>
        {prop.isLoggedIn ? <p><span><Link href="/"><a className={router.pathname === "/" ? s.active: ""}>Home</a></Link></span>|<span><Link href="/assignments"><a className={router.pathname === "/assignments" ? s.active: ""}>Assignments</a></Link></span>|<span><Link href="/contacts"><a className={router.pathname === "/contacts" ? s.active: ""}>Contacts</a></Link></span></p> : <p><span><Link href="/"><a className={router.pathname === "/" ? s.active: ""}>Home</a></Link></span>|<span><Link href="/login"><a className={router.pathname === "/login" ? s.active: ""}>Log In</a></Link></span>|<span><Link href="/signup"><a className={router.pathname === "/signup" ? s.active: ""}>Sign Up</a></Link></span></p>}
        </div>
    )
}