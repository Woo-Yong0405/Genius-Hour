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
                        name.name = "name"
                        name.innerText = boxes[a].name + ": " + boxes[a].email
                        box.append(name)
                        container.append(box)
                        box.addEventListener("mouseenter", (e) => {
                            const adf = e.target
                            if (e.target === adf) {
                                adf.innerHTML = ""
                            const btn1 = document.createElement("button")
                            btn1.id = "btn1"
                            btn1.className = i.contacts_buttons
                            btn1.innerText = "Edit Contact"
                            const btn2 = document.createElement("button")
                            btn2.id = "btn1"
                            btn2.className = i.contacts_buttons
                            btn2.innerText = "Delete Contact"
                            const btn3 = document.createElement("button")
                            btn3.id = "btn1"
                            btn3.className = i.contacts_buttons
                            btn3.innerText = "Mail to this Email"
                            adf.append(btn1)
                            adf.append(btn2)
                            adf.append(btn3)
                            }
                        }, true)
                        box.addEventListener("mouseleave", (e) => {
                            const b = document.createElement("p")
                            b.innerText = name.innerText
                            e.target.innerHTML = ""
                            e.target.append(b)
                        })
                    }
                })
                document.getElementById("submit").addEventListener("click", () => {
                    const nameinput = document.getElementById("name");
                    const emailinput = document.getElementById("email");
                    dbService.collection(`Users/${user.uid}/contacts`).add({
                        name: nameinput.value,
                        email: emailinput.value,
                    })
                    const asdf = document.getElementById("asdf")
                    asdf.innerHTML = ""
                    nameinput.value = ""
                    emailinput.value = ""
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