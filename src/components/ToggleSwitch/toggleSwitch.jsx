import './toggleSwitch.css';

function toggleSwitch(props) {
    return <span className="toggle-button">
            <input type="checkbox" id="switch" onClick={props.onChange}/><label htmlFor="switch">Toggle</label>
        </span>
}

export default toggleSwitch