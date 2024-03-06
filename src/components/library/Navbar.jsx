import 'w3-css/w3.css';

const Navbar = () => {
 
    return ( 
        <div className='w3-bottom w3-bar w3-aqua'>
            <ul className='w3-cell-row'>
                <li className='w3-container w3-red w3-cell'><a className='w3-button w3-black w3-bar-item' href="/">Interview Experiences</a></li>
                <li className='w3-container w3-red w3-cell'><a className='w3-button w3-black w3-bar-item' href="/">Study Materials</a></li>
                <li className='w3-container w3-red w3-cell'><a className='w3-center w3-black w3-text-white w3-bar-item'>Contribute</a></li>
                <li className='w3-container w3-red w3-cell'><a className='w3-button w3-black w3-bar-item' href="/">Interview questions</a></li>
            </ul>
        </div>
    );
}
export default Navbar;