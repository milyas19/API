import React, { useState, useEffect } from 'react';

function App() {

  const url = 'https://jsonplaceholder.typicode.com/users';
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        setUsers(res)
      })
  }, [users])

  const removeItem = (itemId) => {
    console.log(itemId)
    // console.log(users)
    if (users.length !== 0) {
      console.log(users)
      const items = users.filter(item => item.id !== itemId);
      console.log(items)    
      setUsers(users=>items);
    }
  }

  // const addItem = () => {
  //   const newId = users.length + 1;
  //   const newItem = [{ name: 'Hong', id: newId, email: 'hh@hotmail.com', username: 'Hong', phone: 55555555 }];
  //   const newList = users.concat(newItem);
  //   setUsers(newList);
  // }

  return users.map(function (user, index) {
    // console.log(user)
    return (
      <div key={index}>
        <span>
          Name: {user.name} | Email: {user.email} | Username: {user.username} | Phone: {user.phone} | Id: {user.id}
          <div>
            <button onClick={() => removeItem(user.id)}>Delete</button>
          </div>
        </span>
      </div>
    )
  }
  )
}


export default App;
