import React, { Component } from 'react';
import Contact from './Contact'
import { Consumer } from '../context';

class Contacts extends Component {
    

    deleteContact(id){
     const  {contacts} = this.state;

     const newListContact = contacts.filter((contact) => contact.id != id )

     this.setState({
        contacts: newListContact
     })
    }

  render() {
    return (
        <Consumer> 
            {value => (
                <div>
                {
                    value.contacts.map(
                    contactd => {
                      return <Contact data={contactd} deleteContactHere={this.deleteContact.bind(this,contactd.id)}/>
                    }
                    )
                }
               </div>
            )}
        </Consumer>
    )
  }
}

export default  Contacts;
