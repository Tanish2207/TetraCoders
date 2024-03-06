const Input2 = ()=>{
    return (
        <div className="w3-container">
        <div className="w3-card-4">
            <div className="w3-grey form">
            <h2 className="w3-blue w3-center">Contribute to the Library</h2>
            <br />
            <br />
            <label className=" w3-padding"  htmlFor="title">Title : </label>
            <input className="w3-input w3-border" type="text" />
            <br />
            <label className=" w3-padding"  htmlFor="author">Author : </label>
            <input className="w3-input w3-border" type="text" />
            <br />
            <label className=" w3-padding"  htmlFor="body">Details : </label>
            <input style={{height:"100px"}} className="w3-border w3-input" type="textarea" />
            <br />
            <label htmlFor="file"></label>
            <input type="file" />
            <br />
            <br />
            <button className="w3-block w3-padding w3-blue w3-text-black w3-hover-lightblue" type ="button">Contribute</button>
            </div>
        </div>
    </div>
    );
}
export default Input2