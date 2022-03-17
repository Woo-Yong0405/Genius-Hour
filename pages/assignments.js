import { useEffect, useState } from "react"
import i from "./assignments.module.css"
import {authService, dbService } from "../fb"
import LZString from "lz-string"

export default function Assignments() {
    let file = [];
    const onFileChange = (event) => {
        const afile = event.target.files[0]
        const reader = new FileReader();
        reader.onloadend = (d) => {
            const result = d.target.result;
            file = [];
            file.push(result)
            for (let c = 0; c<file.length; c++) {
                const asdasd = document.getElementById("asdasd");
                const newDiv = document.createElement("div");
                newDiv.classList.add(i.previewDiv)
                newDiv.name = c;
                const image = document.createElement("img");
                image.classList.add(i.preview);
                image.id = "a";
                image.src = file[c];
                newDiv.appendChild(image);
                const button = document.createElement("button");
                button.classList.add(i.remove);
                button.onclick = (event) => {
                    file.splice(event.path[1].name);
                    event.path[1].remove();
                }
                button.innerText = "Remove Photo";
                newDiv.appendChild(button);
                asdasd.appendChild(newDiv);
            }
        }
        reader.readAsDataURL(afile)
        console.log(afile.name)
    }
    useEffect(() => {
        const div = document.createElement("div");
        div.classList.add(i.assignments)
        div.id = "assignment"
        dbService.collection("Assignments").onSnapshot((querySnapshot) => {
            let asdfasdf = [];
            querySnapshot.forEach((doc) => {
                asdfasdf.push({
                    id: doc.id,
                    title: doc.data().title,
                    subject: doc.data().subject,
                    desc: doc.data().description,
                    file: doc.data().file,
                    date: doc.data().date,
                    author: doc.data().author
                })
            })
            const bigDiv = document.getElementById("bidDiv")
            const asdasd = document.getElementById("assignment");
            if (asdasd) {
                asdasd.innerHTML = "";
            }
            for (let a = 0; a<asdfasdf.length; a++) {
                const littleDiv = document.createElement("div");
                littleDiv.id = asdfasdf[a].id
                littleDiv.classList.add("asdf");
                littleDiv.classList.add(i.formDiv);
                littleDiv.classList.add(i.assignment)
                const h1 = document.createElement("h1")
                h1.innerText = "Title: " + asdfasdf[a].title;
                if (asdfasdf[a].title == "") {
                    h1.innerText = "Untitled";
                }
                littleDiv.appendChild(h1);
                const h2 = document.createElement("p");
                h2.innerText = "Subject: " + asdfasdf[a].subject;
                if (asdfasdf[a].subject == "") {
                    h2.innerText = "Subject Not Selected";
                }
                littleDiv.appendChild(h2);
                const p = document.createElement("p");
                p.innerText = "Description: " + asdfasdf[a].desc;
                if (asdfasdf[a].desc == "") {
                    p.innerText = "No Description Written";
                }
                littleDiv.appendChild(p);
                if (asdfasdf[a].file !== "") {
                    const image = document.createElement("img");
                    image.src = LZString.decompressFromUTF16(asdfasdf[a].file);
                    image.classList.add(i.images)
                    littleDiv.appendChild(image)
                }
                const p2 = document.createElement("p");
                p2.innerText = "Due Date: " + asdfasdf[a].date;
                if (asdfasdf[a].date == "") {
                    p2.innerText = "No Due Date Selected";
                }
                littleDiv.appendChild(p2);
                const p3 = document.createElement("p");
                p3.innerText = "Uploaded By: " + asdfasdf[a].author;
                if (asdfasdf[a].author == "") {
                    p3.innerText = "Uploaded By: Anonymous";
                }
                littleDiv.appendChild(p3);
                const deleteBtn = document.createElement("button");
                deleteBtn.innerText = "Delete"
                deleteBtn.classList.add(i.deleteBtn)
                deleteBtn.onclick = (event) => {
                    const box = event.path[1].id;
                    dbService.doc("Assignments/" + box).delete();
                    event.path[2].innerText = ""
                }
                littleDiv.appendChild(deleteBtn)
                div.appendChild(littleDiv);
            }
            bigDiv.appendChild(div)
        })
        document.getElementById("submit").addEventListener("click", () => {
            let formChildren = document.getElementById("form").children
        let title = formChildren[0].value
        let subject = formChildren[1].value
        let desc = formChildren[2].value
        let date = document.getElementById("date").value
        const ssss = document.getElementById("a");
        let asdfg = ""
        if (ssss) {
            asdfg = LZString.compressToUTF16(ssss.src)
        }
        console.log(asdfg)
        dbService.collection(`Assignments`).add({
            title: title,
            subject: subject,
            description: desc,
            file: asdfg,
            date: date,
            author: authService.currentUser.displayName,
        })
        const asdf = document.getElementById("assignment")
        asdf.innerHTML = "";
        file = [];
        const asdasd = document.getElementById("asdasd");
        asdasd.innerHTML = "";
        for (let c = 0; c<file.length; c++) {
            const asdasd = document.getElementById("asdasd");
            const newDiv = document.createElement("div");
            newDiv.classList.add(i.previewDiv)
            newDiv.name = c;
            const image = document.createElement("img");
            image.classList.add(i.preview);
            image.id = "a";
            image.src = file[c];
            newDiv.appendChild(image);
            const button = document.createElement("button");
            button.classList.add(i.remove);
            button.onclick = (event) => {
                file.splice(event.path[1].name);
                event.path[1].remove();
            }
            button.innerText = "Remove Photo";
            newDiv.appendChild(button);
            asdasd.appendChild(newDiv);
        }
        })
    }, [])
    return (
        <div className={i.bigDiv} id="bidDiv">
            <div className={`${i.formDiv} ${i.cloud}`}>
                <h1>Add an Assignment</h1>
                <form id="form">
                    <input className={i.title} type="text" placeholder="Assignment Title" required />
                    <input className={i.subject} type="text" placeholder="Subject" required />
                    <input className={i.desc} type="text" placeholder="Assignment Description" />
                    <p>Photos: </p>
                    <input type="file" className={i.photo} accept="image/*" onChange={onFileChange} />
                    <p>Preview:</p>
                    <div className={i.previewDivs} id="asdasd"></div>
                    <p>Due Date: </p>
                    <input type="date" id="date" className={i.date} />
                </form>
                <button id="submit" className={i.submit}>Add Assignment</button>
            </div>
        </div>
    )
}