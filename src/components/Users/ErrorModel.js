import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./ErrorModel.module.css"

const ErrorModel = (props) =>{
    return(
        <div className={classes.errorBody} onClick={props.onConform}>
                <Card>
                    <div className={classes.title}>{props.title}</div>
                    <div className={classes.messege}>{props.messege}</div>
                    <Button onClick={props.onConform}>Close</Button>
                </Card>
        </div>
    )
}

export default ErrorModel;