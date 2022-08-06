import React from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) =>{
    return (
    <Card className={classes.users}>
        <ul>
            {props.users.map(user => (
            <li key={user.id}>
             <div>{user.name}</div> <div>({user.age} Years Old)</div>
            </li>
            ))}
        </ul>
    </Card>
    );
;}
export default UserList;