import React,  { Component }  from 'react';
import './ControlPanel.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



library.add(faPlus)




class ControlPanel extends Component {
    state = {
        value: 'sortBy'
    }


    render() {
        return (
            <div className="control-panel flex space-around">
                <select name="sortBy" id="sortBy" value={this.state.value} onChange={this.props.sortClicked} >
                    <option value='sortBy' disabled selected>Sort By</option>
                    <option value="firstName">First Name</option>
                    <option value="lastName">Last Name</option>
                </select>
                <button className="add-user-btn" onClick={this.props.addClicked}>
                    <FontAwesomeIcon icon="plus" />
                </button>
            </div>
        );
    }


   
}

export default ControlPanel;