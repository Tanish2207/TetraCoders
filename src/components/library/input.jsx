import { useState } from "react";
import {useHistory} from 'react-router-dom';
const Input = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        const content = { title, body }

        setIsPending(true);
        fetch('http://localhost:8000/content', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(content)
        }).then(() => {
            console.log("new cotent added")
            setIsPending(false)
             history.push('Home')
        })
       
    }
    return (
        <div className="w3-container" >
            <div className="w3-card-4">
                <form onSubmit={handleSubmit} className="w3-grey form">
                    <h2 className="w3-blue w3-center">Contribute to the Library</h2>
                    <br />
                    <br />
                    <label className=" w3-padding" name="title" value={title} id="title">Title : </label>
                    <input className="w3-input w3-border" onChange={(e) => setTitle(e.target.value)} type="text" />
                    <br />
                    <label className=" w3-padding" name="body" value={body} onChange={(e) => setBody(e.target.value)} id="body">Content : </label>
                    <input style={{ height: "100px" }} className="w3-border w3-input" type="textarea" />
                    <br />
                    {!isPending && <button className="w3-block w3-padding w3-blue w3-text-black w3-hover-lightblue" type="button">Contribute</button>}
                    {isPending && <button disabled className="w3-block w3-padding w3-blue w3-text-black w3-hover-lightblue"  >Adding content..</button>}
                </form>

            </div>
        </div >
    );
}
export default Input;