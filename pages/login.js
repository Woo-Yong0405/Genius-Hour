import { useRouter } from "next/router";
import { useState } from "react";
import i from "./login.module.css";
import {authService, firebaseInstance} from "../fb";

export default function login() {
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")
    const [error, setError] = useState("")
    const router = useRouter();
    const handleGoogleClick = async () => {
        try {
            const provider = new firebaseInstance.auth.GoogleAuthProvider();
            authService.signInWithPopup(provider)
            await router.push("/")
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className={i.bigDiv}>
            <h1 className={i.login}>Log In</h1>
            <button className={i.btn} onClick={handleGoogleClick}>Log In Using Google</button>
            <form className={i.form}>
                {error}
                <input className={i.input} type="email" required placeholder="E-mail" name="email" id="email" onChange={() => {
                    setEmail(document.getElementById("email").value)
                }} />
                <input className={i.input} type="password" required placeholder="Password" name="pw" id="pw" onChange={() => {
                    setPw(document.getElementById("pw").value)
                }} />
            </form>
            <button className={i.button} onClick={async () => {
                    try {
                        await authService.signInWithEmailAndPassword(email, pw)
                        router.push("/")
                    } catch (error) {
                        setError(error.message)
                    }
                }}>Log In</button>
        </div>
    )
}