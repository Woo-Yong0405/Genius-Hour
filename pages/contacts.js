import { authService, dbService } from "../fb";
import { useEffect, useState } from "react";
import i from "./contacts.module.css";


export default function contacts() {
    const [contacts, setContacts] = useState([])
    function getContacts()  {
        dbService.collection(`Users/${authService.currentUser.uid}/contacts`).get().then(querySnapshot => {
            querySnapshot.docs.map(doc => {
                setContacts(contacts, {
                    name: doc.data().name,
                    email: doc.data().email
                })
            })
        })
    }
    useEffect(() => {
        document.getElementById("submit").addEventListener("click", () => {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            dbService.collection(`Users/${authService.currentUser.uid}/contacts`).add({
                name: name,
                email: email
            })
        })
        setTimeout(getContacts(), 20)
    })
    return (
        <div className={i.bigDiv}>
            <h1>Your Contacts:</h1>
            <div className={i.contacts}>
                <div className={i.contacts_box}>
                    <form className={i.contacts_form}>
                        <input id="name" className={i.contacts_name} type="text" placeholder="Full Name" required />
                        <input id="email" className={i.contacts_email} type="email" placeholder="Email" required />
                    </form>
                    <button className={i.submit} id="submit" >Create Contact</button>
                </div>
            </div>
        </div>
    )
}