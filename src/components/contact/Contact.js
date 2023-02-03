import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Contact.css';

class Contact extends Component {

    state = {
        showContaToggel:true
     }
 showContact(){
   this.setState({
    showContaToggel : ! this.state.showContaToggel
   });
 }

 

 deleteClick(){
    this.props.deleteContactHere()
}
 

  render() {
    const {name , email , number, id } = this.props.data;
    return (
        
        <div className="card">
            <div className="card-body">
                <h4 className="card-title"> 
                Contact : {name}  
                <i style={{ cursor:'pointer'}} onClick={this.showContact.bind(this)} className='mx-4 fa fa-sort-down'></i>
                <i style={{float:'right', cursor:'pointer'}} onClick={this.deleteClick.bind(this)} className='text text-danger  fa fa-trash'></i>
                
                </h4>
                <div className='card-text'>
                    {(this.state.showContaToggel) ? (
                        <ul key={id} className="list-group">
                        <li key="1"  className="list-group-item">Email : {email}</li>
                        <li key="2" className="list-group-item">Téléphone : {number}</li>
                        </ul> ) : null 
                    }
             
                </div>
            </div>
        </div>
    )
  }
}

export default Contact;

Contact.defaultProps = {
    name : "My name",
    number  : "06000000",
    email: "test@test.com"
} 
