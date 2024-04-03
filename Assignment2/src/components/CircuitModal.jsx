import React from 'react'
import "../styles/RaceList.css"
import 'Assignment2/src/styles/popup.css'

function CircuitModal(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn">close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default CircuitModal