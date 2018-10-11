import React,  { Component }  from 'react';
import './UserPreview.css';
import UserService from '../../services/UserService'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

  class UserPreview extends Component {
    render() {
        return(
            <div className="user-preview flex space-between align-center">
                <div className="user-preview-container flex">
                    <img src={this.props.user.profileImage} alt="" className="preview-avatar"/>
                    <div className="details-container flex flex-col justify-center align-center">
                        <div className="name-container">
                            {this.props.user.firstName} {this.props.user.lastName}
                        </div>
                        <div className="date-container">
                            {UserService.formatted_date(this.props.user.birthDate)}
                        </div>
                    </div>
                </div>
                <button className="delete-btn" onClick={()=> this.props.deleteClicked(this.props.user.id)}>
                    <FontAwesomeIcon icon="trash" />
                </button>
            </div>
        )
    }


    
   
}  

   
  export default UserPreview;
