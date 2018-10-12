import React,  { Component }  from 'react';
import './UserList.css'
import UserListItems from '../UserListItems/UserListItems'
import ControlPanel from '../ControlPanel/ControlPanel'




class UserList extends Component {

    render() {
        return (
          <section className="user-list">
            <h1 className="section-title">Users List</h1>
            <ControlPanel
                sortClicked = {this.props.sortClicked}
                addClicked = {this.props.addClicked}
            ></ControlPanel>
            <UserListItems
                users = {this.props.users}
                displayDetails = {this.props.displayDetails}
                deleteClicked = {this.props.deleteClicked}
            >

            </UserListItems>

          </section>
        );
    }


   
}

export default UserList;


