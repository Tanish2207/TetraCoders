import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);

    var today = new Date();
    var x = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2)

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `../libhome`
      navigate(path);
    }
  
    const handleSubmit = (e) => {
        // e.preventDefault()
        const content = { title, body, date:x }

        setIsPending(true);
        fetch('http://localhost:8010/content', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(content)
        }).then(() => {
            console.log("new content added")
            setIsPending(false)

        })
        routeChange()
    }
    return (
        <div className="w3-container" >
            <div className="w3-card-4">
                <form onSubmit={(e)=>{
                    e.preventDefault()
                }} className="w3-grey form">
                    <div className="w3-xxlarge w3-blue w3-center">Contribute to the Library</div>
                    <br />
                    <br />
                    <label className=" w3-padding" name="title" value={title} id="title">Title : </label>
                    <input className="w3-input w3-border" onChange={(e) => setTitle(e.target.value)} type="text" />
                    <br />
                    <label className=" w3-padding" name="body"  id="body">Content : </label>
                    <input style={{ height: "100px" }} onChange={(e) => setBody(e.target.value)} className="w3-border w3-input" type="textarea" />
                    <br />
                    <label className="w3-padding">Date : </label>
                    <input disabled id="date" type="date" className="w3-border w3-input" value={x}/>
                    {!isPending && <button  onClick={handleSubmit} className="w3-hover-grey w3-block w3-padding w3-blue w3-text-black w3-hover-lightblue" type="submit">Contribute</button>}
                    {isPending && <button disabled className="w3-block w3-padding w3-blue w3-text-black w3-hover-lightblue"  >Adding content..</button>}
                </form>

            </div>
        </div >
    );
}
export default Input;