import React,  { Component }  from 'react';
import './UserListItems.css'
import UserPreview from '../UserPreview/UserPreview'
import { faDivide } from '@fortawesome/free-solid-svg-icons';


import Dragula from 'react-dragula';



class UserListItems extends Component {

    render() {
        return (
            <ul ref={this.dragulaDecorator}>
                {this.props.users.map(user => ( 
                    <li 
                        key={user.id} 
                        onClick={()=> this.props.displayDetails(user.id)}

                    >
                        <UserPreview 
                            user = {user}
                            deleteClicked = {this.props.deleteClicked}
                        ></UserPreview>
                    </li>
                ))}    
            </ul>

        );
    }
    dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
          let options = { };
          Dragula([componentBackingInstance], options);
        }
      };


   
}

export default UserListItems;


