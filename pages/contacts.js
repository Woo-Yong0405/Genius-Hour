import { authService, dbService } from "../fb";
import { useEffect, useState } from "react";
import i from "./contacts.module.css";
import { useRouter } from "next/router";


export default function contacts() {
    const router = useRouter()
    useEffect(() => {
        authService.onAuthStateChanged((user) => {
            if (user) {
                dbService.collection(`Users/${user.uid}/contacts`).onSnapshot((querySnapshot) => {
                    let boxes = [];
                    querySnapshot.forEach((doc) => {
                        boxes.push({
                            name: doc.data().name,
                            email: doc.data().email
                        })
                    })
                    for (let a = 0; a < boxes.length; a++) {
                        const container = document.getElementById("asdf")
                        const box = document.createElement("div")
                        box.classList.add(i.contacts_box)
                        const name = document.createElement("p")
                        name.innerText = boxes[a].name + ": " + boxes[a].email
                        box.append(name)
                        container.append(box)
                    }
                })
                document.getElementById("submit").addEventListener("click", () => {
                    const name = document.getElementById("name").value;
                    const email = document.getElementById("email").value;
                    dbService.collection(`Users/${user.uid}/contacts`).add({
                        name: name,
                        email: email,
                    })
                    const asdf = document.getElementById("asdf")
                    asdf.innerHTML = ""
                })
            }
        })
    }, [])
    return (
        <div className={i.bigDiv}>
            <h1>Your Contacts:</h1>
                <div className={i.contacts_box}>
                    <form className={i.contacts_form}>
                        <input id="name" className={i.contacts_name} type="text" placeholder="Full Name" required />
                        <input id="email" className={i.contacts_email} type="email" placeholder="Email" required />
                    </form>
                    <button className={i.submit} id="submit" >Create Contact</button>
                </div>
            <div id="asdf" className={i.contacts}>
            </div>
        </div>
    )
}