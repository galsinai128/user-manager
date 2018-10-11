import React,  { Component }  from 'react';
import './UserDetails.css';
import UserService from '../../services/UserService'

  class UserDetails extends Component {
    render() {
        if (this.props.user){
            return (
              <section className="user-details">
                <h1 className="section-title">Full Details</h1>
                <div className="flex">
                  <img src={this.props.user.profileImage} alt="" className="detail-avatar"/>
                  <div className="details-container">
                      <div className="detail-container">
                        <div className="detail">{this.props.user.id}</div>
                        <div className="description">ID</div>
                      </div>
                      <div className="detail-container">
                        <div className="detail">{this.props.user.firstName}</div>
                        <div className="description">First Name</div>
                      </div>
                      <div className="detail-container">
                        <div className="detail">{this.props.user.lastName}</div>
                        <div className="description">Last Name</div>
                      </div>
                      <div className="detail-container">
                        <div className="detail">{UserService.formatted_date(this.props.user.birthDate)}</div>
                        <div className="description">Birth Date</div>
                      </div>
                  </div>
                </div>
              </section>
            );
        }
        else {
            return (
              <section className="user-list">
                <h1 className="section-title">Full Details</h1>
                Please pick a user
              </section>
            );
        }
    }

  
   
   
}  

  export default UserDetails;