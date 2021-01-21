import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      })
  }

  removeItem(itemId) {
    if (this.state.items.length !== 0) {
      const items = this.state.items.filter(item => item.id !== itemId);
      this.setState({ items: items });
    }
  }

  addItem() {
    const newId = this.state.items.length + 1;
    const newItem = [{name:'Hong',id:newId, email:'hh@hotmail.com',username:'Hong', phone:55555555}];
    const newList = this.state.items.concat(newItem);
    this.setState({ items: newList });
    }  

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div> Loading...</div>;
    }
    else {
      return (
        <div>
          <ul>
            {items.map(item => (
              <span key={item.id} >
                Name: {item.name} | Email: {item.email} | Username: {item.username} | Phone: {item.phone} | Id: {item.id}
                <div>
                <button onClick={() => { this.removeItem(item.id)}}>Delete</button>                 
                </div>
              </span>               
            ))}
            <button onClick={() => { this.addItem() }}>Add</button> 
          </ul>          
        </div>
      )

    }
  }
}


export default App;
