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
                        const btns = document.createElement("div")
                        btns.classList.add(i.contacts_btns)
                        const name = document.createElement("p")
                        name.innerText = boxes[a].name + ": " + boxes[a].email
                        box.append(name)
                        const edit = document.createElement("button")
                        edit.innerText = "Edit Contact"
                        edit.id = "edit"
                        btns.append(edit)
                        const deleteBtn = document.createElement("button")
                        deleteBtn.id = "delete"
                        deleteBtn.innerText = "Delete Contact"
                        btns.append(deleteBtn)
                        const mail = document.createElement("button")
                        mail.id = "mail"
                        mail.innerText = "Send Mail to: " + boxes[a].email
                        btns.append(mail)
                        box.append(btns)
                        container.append(box)
                        let isOpen = false
                        edit.addEventListener("click", (e) => {
                            if (isOpen === false) {
                                const formDiv = document.createElement("div");
                            const form = document.createElement("form");
                            const name = document.createElement("input");
                            name.type = "text"
                            name.id = "editName"
                            form.append("Name: ")
                            form.append(name)
                            const email = document.createElement("input");
                            email.type = "email"
                            email.id = "editEmail"
                            form.append("Email: ")
                            form.append(email)
                            const button = document.createElement("button");
                            button.id = "editConfirm"
                            button.innerText = "Edit Contact"
                            const button1 = document.createElement("button");
                            button1.id = "cancelConfirm"
                            button1.innerText = "Cancel"
                            formDiv.append(form);
                            formDiv.id = "formDiv"
                            formDiv.append(button)
                            formDiv.append(button1)
                            formDiv.classList.add(i.contacts_formDiv)
                            for (let c = 0; c < e.path[3].children.length; c++) {
                                if (e.path[3].children[c] == e.path[2]) {
                                    const ddd = document.getElementById("asdf").children
                                    for (let d = 0; d < ddd[c].children.length; d++) {
                                        ddd[c].children[d].hidden = true;
                                        for (let e = 0; e < ddd[c].children[d].children.length; e++) {
                                            ddd[c].children[d].children[e].hidden = true;
                                        }
                                    }
                                    ddd[c].append(formDiv)
                                    dbService.collection(`Users/${authService.currentUser.uid}/contacts`).where("name", "==", boxes[c].name).where("email", "==", boxes[c].email).get().then((querySnapshot) => {
                                        querySnapshot.forEach((doc) => {})
                                    })
                                }
                            }
                            const editConfirm = document.getElementById("editConfirm");
                            editConfirm.addEventListener("click", (e) => {
                                for (let c = 0; c < e.path[3].children.length; c++) {
                                    if (e.path[3].children[c] == e.path[2]) {
                                        const name = document.getElementById("editName").value
                                        const email = document.getElementById("editEmail").value
                                        dbService.collection(`Users/${authService.currentUser.uid}/contacts`).where("name", "==", boxes[c].name).where("email", "==", boxes[c].email).get().then((querySnapshot) => {
                                            querySnapshot.forEach((doc) => {
                                                dbService.doc(`Users/${authService.currentUser.uid}/contacts/${doc.id}`).update({
                                                    name: name,
                                                    email: email
                                                })
                                                document.getElementById("asdf").innerText = ""
                                            })
                                        })
                                        const ddd = document.getElementById("asdf").children
                                        for (let d = 0; d < ddd[c].children.length; d++) {
                                            ddd[c].children[d].hidden = false
                                            if (ddd[c].children[d].hasChildNodes) {
                                                for (let e = 0; e < ddd[c].children[d].children.length; e++) {
                                                    ddd[c].children[d].children[e].hidden = false
                                                }
                                            }
                                            if (ddd[c].children[d].id === "formDiv") {
                                                ddd[c].children[d].remove()
                                            }
                                        }
                                    }
                                }
                            })
                            const cancelConfirm = document.getElementById("cancelConfirm");
                            cancelConfirm.addEventListener("click", (e) => {
                                for (let c = 0; c < e.path[3].children.length; c++) {
                                    if (e.path[3].children[c] == e.path[2]) {
                                        const ddd = document.getElementById("asdf").children
                                        for (let d = 0; d < ddd[c].children.length; d++) {
                                            ddd[c].children[d].hidden = false
                                            if (ddd[c].children[d].hasChildNodes) {
                                                for (let e = 0; e < ddd[c].children[d].children.length; e++) {
                                                    ddd[c].children[d].children[e].hidden = false
                                                }
                                            }
                                            if (ddd[c].children[d].id === "formDiv") {
                                                ddd[c].children[d].remove()
                                            }
                                        }
                                    }
                                }
                            })
                            }
                        })
                        deleteBtn.addEventListener("click", (e) => {
                            for (let c = 0; c < e.path[3].children.length; c++) {
                                if (e.path[3].children[c] == e.path[2]) {
                                    const asdf = document.getElementById("asdf")
                                    asdf.innerHTML = ""
                                    dbService.collection(`Users/${authService.currentUser.uid}/contacts`).where("name", "==", boxes[c].name).where("email", "==", boxes[c].email).get().then((querySnapshot) => {
                                        querySnapshot.forEach((doc) => {
                                            dbService.doc(`Users/${authService.currentUser.uid}/contacts/${doc.id}`).delete()
                                        })
                                    })
                                }
                            }
                        })
                        mail.addEventListener("click", (e) => {
                            for (let c = 0; c < e.path[3].children.length; c++) {
                                if (e.path[3].children[c] == e.path[2]) {
                                    router.push("mailto:" + boxes[c].email)
                                }
                            }
                        })
                    }
                })
                document.getElementById("submit").addEventListener("click", () => {
                    const name = document.getElementById("name");
                    const email = document.getElementById("email");
                    dbService.collection(`Users/${user.uid}/contacts`).add({
                        name: name.value,
                        email: email.value,
                    })
                    const asdf = document.getElementById("asdf")
                    asdf.innerHTML = ""
                    name.value = ""
                    email.value = ""
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