import React,{useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {

  const [ userList , setUserList] = useState([]);

  const addUserHandler =(uName , uAge) =>{
    console.log("hello")
    setUserList((previousList) =>{
      return [...previousList , {id:previousList.length ,name :uName , age:uAge}];
    });
  }
  
  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList}/>
    </div>
  );
}

export default App;
