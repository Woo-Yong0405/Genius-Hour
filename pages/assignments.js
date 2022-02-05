import i from "./assignments.module.css"

export default function assignments() {
    return (
        <div className={i.bigDiv}>
            <div className={i.formDiv}>
                <h1>Add an Assignment</h1>
                <form>
                    <input className={i.title} type="text" placeholder="Assignment Title" required />
                    <input className={i.subject} type="text" placeholder="Subject" required />
                    <input className={i.desc} type="text" placeholder="Assignment Description" />
                    <p>Photos: <input type="file" className={i.photo} /></p>
                    <p>Due Date: <input type="date" className={i.date} /></p>
                    <input type="submit" className={i.submit} />
                </form>
            </div>
        </div>
    )
}