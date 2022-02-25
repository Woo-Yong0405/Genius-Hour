import { useEffect } from "react"
import i from "./assignments.module.css"

export default function assignments() {
    useEffect(() => {
        document.getElementById("submit").addEventListener("click", () => {
            let formChildren = document.getElementById("form").children
            let title = formChildren[0].value
            let subject = formChildren[1].value
            let desc = formChildren[2].value
            let file = formChildren[4].innerHTML
            let date = formChildren[6].value
            console.log(title, subject, desc, file, date)
        })
    })
    return (
        <div className={i.bigDiv}>
            <div className={i.formDiv}>
                <h1>Add an Assignment</h1>
                <form id="form">
                    <input className={i.title} type="text" placeholder="Assignment Title" required />
                    <input className={i.subject} type="text" placeholder="Subject" required />
                    <input className={i.desc} type="text" placeholder="Assignment Description" />
                    <p>Photos: </p>
                    <input type="file" className={i.photo} accept="image/*" />
                    <p>Due Date: </p>
                    <input type="date" className={i.date} />
                </form>
                <button id="submit" className={i.submit}>Add Assignment</button>
            </div>
        </div>
    )
}