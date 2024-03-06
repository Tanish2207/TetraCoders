import 'w3-css/w3.css';
import "./Navbar.css";
const Navbar = () => {

    return (
        <div className="w3-container ">
            <div className='w3-bottom w3-bar w3-black'>
                <ul className='w3-cell-row'>
                    <li className='w3-container w3-cell'><a className='w3-button w3-black w3-bar-item' href="/">Interview Experiences</a></li>
                    <li className='w3-container w3-cell'><a className='w3-button w3-black w3-bar-item' href="/">Study Materials</a></li>
                    <li className='w3-container w3-cell'><a href='/input' type='button'className='w3-circle w3-button w3-black w3-bar-item'>Contribute</a></li>
                    <li className='w3-container w3-cell'><a className='w3-button w3-black w3-bar-item' href="/">Interview questions</a></li>
                    <li className='w3-container w3-cell'><a className='w3-button w3-black w3-bar-item' href="/">Home</a></li>
                </ul>
            </div>
            {/* <div id="id01" className="select">
                    <div className="panel">
                        <h2 className='w3-blue' >Choose A category  </h2><span onclick="document.getElementById('id01').style.display='none'"
                            className="w3-button w3-display-topright">&times;</span>
                        <div>
                            <select name="category" id="category">
                                <option value="default" selected disabled>Choose from the following</option>
                                <option value="experience">Sharing experience</option>
                                <option value="questions">Interview Questions</option>
                                <option value="materials">StudyMaterials</option>
                            </select>
                        </div>
                    </div>
            </div> */}
        </div >
    );
}
export default Navbar;