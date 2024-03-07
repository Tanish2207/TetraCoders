import 'w3-css/w3.css';
import content from './db.json';
const Experience = ({content}) => {
    return (
        <div className="w3-margin-top w3-container">
             <input class="w3-input w3-border w3-padding" type="text" placeholder="Search Interview experiences" id="myInput" onkeyup="myFunction()"></input>

                <div className="w3-container">
                    <div className='w3-xxlarge'>Experiences from some Interviwee</div>

                   
                </div>
            <br />
        </div>

    );
}
export default Experience;
