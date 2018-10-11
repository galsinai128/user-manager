import React,  { Component }  from 'react';
import './AddUser.css'
import UserService from '../../services/UserService'

import Modal from 'react-modal';


class AddUser extends Component {
    state = {
      newUser : {
        firstName : '',
        lastName : '',
        birthDate : null,
      },
    };

    handleOpenModal = () => {
      this.setState({ showModal: true });
    }
    


    render() {
        return (
          <section className="add-user">

            <Modal 
              isOpen={this.props.showModal}
              contentLabel="Minimal Modal Example"
              >
              <form onSubmit={(e)=>this.props.addUserClicked(e)} className="edit-form flex flex-col justify-center align-center">
                <div className="inputs-container flex flex-col space-around align-center">
                  <input name="firstName" placeholder="First Name" className="edit-input" type="text" required/>
                  <input name="lastName" placeholder="Last Name" className="edit-input" type="text" required/>
                  <input name="birthDate" placeholder="Date Of Birth" className="edit-input" type="date" required/>
                </div>
                <button type="submit" className="edit-btn">save</button>
              </form>
              <button onClick={this.props.handleCloseModal}>Close Modal</button>
            </Modal>
          </section>
        );
    }



   
}

export default AddUser;