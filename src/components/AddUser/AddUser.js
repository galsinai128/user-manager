import React,  { Component }  from 'react';
import './AddUser.css'
import UserService from '../../services/UserService'

import Modal from 'react-modal';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave,faWindowClose } from '@fortawesome/free-solid-svg-icons'

library.add(faSave)
library.add(faWindowClose)


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
              <div className="modal-data flex flex-col align-center">
                <h1>New User</h1>
                <form onSubmit={(e)=>this.props.addUserClicked(e)} className="edit-form flex flex-col align-center">
                  <input name="firstName" placeholder="First Name" className="edit-input" type="text" required/>
                  <input name="lastName" placeholder="Last Name" className="edit-input" type="text" required/>
                  <input name="birthDate" placeholder="Date Of Birth" className="edit-input" type="date" required/>
                  <div className="add-btns-container">
                    <button className="add-btn" type="submit">
                      <FontAwesomeIcon icon="save" />
                    </button>
                    <button className="add-btn" onClick={this.props.handleCloseModal}>
                      <FontAwesomeIcon icon="window-close" />
                    </button>
                  </div>
                </form>
              </div>
            </Modal>
          </section>
        );
    }



   
}

export default AddUser;