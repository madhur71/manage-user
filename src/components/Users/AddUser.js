import React, {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css'
import ErrorModel from './ErrorModel';

const AddUser = props =>{

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredUserAge, setEnteredUserAge] = useState('');
    const [error, setError] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length ===0){
            setError({title:'Invalid input', messege:'Please enter a valid Name (Non-Empty Values)'});
            return;
        }
        if(+enteredUserAge <1 || enteredUserAge.trim().length === 0  ){
            setError({title:'Invalid age', messege:'Please enter a valid Age (Age > 0)'});
            return;
        }
        props.onAddUser(enteredUserName,enteredUserAge);
        setEnteredUserName("")
        setEnteredUserAge("")
    };
    const userNameChangedHandler = (event) =>{
        setEnteredUserName(event.target.value)
    };
    const userAgeChangedHandler = (event) =>{
        setEnteredUserAge(event.target.value)
    };

    const errorHandler = () =>{
        setError(null);
    }
    return(
        <div className={classes.body}>
           {error && <ErrorModel title={error.title} messege={error.messege} onConform={errorHandler} /> }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='userName'>User Name</label>
                    <input id='userName' type='text' value={enteredUserName} onChange={userNameChangedHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' type='number' value={enteredUserAge} onChange={userAgeChangedHandler}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;