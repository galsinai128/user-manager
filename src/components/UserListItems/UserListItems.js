import React,  { Component }  from 'react';
import './UserListItems.css'
import UserPreview from '../UserPreview/UserPreview'




class UserListItems extends Component {

    render() {
        return (
            <div>
                {this.props.users.map(user => (
                    <div key={user.id} onClick={()=> this.props.displayDetails(user.id)}>
                        <UserPreview 
                            user = {user}
                            deleteClicked = {this.props.deleteClicked}
                        ></UserPreview>
                    </div>
                ))}    
            </div>

        );
    }


   
}

export default UserListItems;


