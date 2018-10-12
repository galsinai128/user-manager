import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList/UserList'
import UserDetails from './components/UserDetails/UserDetails'
import AddUser from './components/AddUser/AddUser'
import UserService from './services/UserService'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class App extends Component {
  state = {
      users : [],
      userToShow : null,
      showModal : false
  };
  componentDidMount(){
      var users = [...UserService.getUsers()]
      this.setState({users: users})
  }
  
  displayDetails = (id) => {
    this.setState({userToShow : UserService.getUserById(id)})
  }

  sortClicked = (e) =>{
    var key = e.target.value
    this.setState({users : UserService.sortBy(key)})
  }

  addUserClicked = (e) =>{
    e.preventDefault();
    const formElements = e.target.elements;
    const vals = {
      firstName: formElements.firstName.value,
      lastName: formElements.lastName.value,
      birthDate: formElements.birthDate.value
    }
    this.setState({users : [UserService.addUser(vals),...this.state.users]})
    this.handleCloseModal();
  }
    
  deleteClicked = (id) =>{
    UserService.deleteUser(id)
    const index = this.state.users.findIndex(user => user.id === id)
    if (index !== -1) {
      var updatedUsers  = [...this.state.users]
      updatedUsers.splice(index,1)
    }
    this.setState({users : updatedUsers})
  }

  
  displayAdd= () =>{
    this.setState({showModal : true});
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }


  render() {
    return (
      <div className="App">
        <AddUser
          addUserClicked = {this.addUserClicked}
          showModal = {this.state.showModal}
          handleCloseModal = {this.handleCloseModal}
        ></AddUser>
        <div className="app-container flex">
          <div className="list-container">
            <UserList 
              users = {this.state.users} 
              displayDetails = {this.displayDetails}
              sortClicked = {this.sortClicked}
              addUserClicked = {this.addUserClicked}
              deleteClicked = {this.deleteClicked}
              addClicked = {this.displayAdd}
              >
            </UserList>
          </div>
          <div className="user-container">
            <UserDetails user = {this.state.userToShow}></UserDetails>
          </div>
        </div>
      </div>
    );
  }


}

export default App;


