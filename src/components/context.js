import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {

    state = {
        contacts : [
            {
                id:1,
                name:"test",
                number:"0644769032",
                email:"test@gmail.com"
            },
            
            {
                id:2,
                name:"mohamed",
                number:"0700000",
                email:"mohamed@gmail.fr"
            },
            {
                id:3,
                name:"abidar",
                number:"+33 5222224",
                email:"abidar@gmail.com"
            },
        ]
    }; 

  render() {
    return (
      <div>
        
        <Context.Provider value={this.state}> 
        {this.props.children}
        </Context.Provider>


      </div>
    )
  }
}

export const Consumer = Context.Consumer;