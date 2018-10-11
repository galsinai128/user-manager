import React,  { Component }  from 'react';
import './UserList.css'
import UserPreview from '../UserPreview/UserPreview'
import UserService from '../../services/UserService'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)


class UserList extends Component {
    state = {
        value: 'sortBy'
    }
    render() {
        return (
          <section className="user-list">
            <h1 className="section-title">Users List</h1>
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
            <ul>
                {this.props.users.map(user => (
                    <li key={user.id} onClick={()=> this.props.displayDetails(user.id)}>
                        <UserPreview 
                            user = {user}
                            deleteClicked = {this.props.deleteClicked}
                        ></UserPreview>
                    </li>
                ))}    
            </ul>

          </section>
        );
    }


   
}

export default UserList;