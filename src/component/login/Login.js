import React from 'react'
import "./Login.css"
import { Button } from "@material-ui/core"
import { auth, provider } from "../../firebase";
import { actionTypes } from '../../reducer';
import { useStateValue } from "../../StateProvider"


function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then( result => {
           
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => {
            alert(error.message);
        })
    } 


    return (
        <div className="login">
            <div className="login__container">
                <img
                    src="https://logos-world.net/wp-content/uploads/2020/10/Slack-Logo-700x394.png"
                    alt=""
                />
                <h1>Sign in to Slack</h1>
                <p>slack.com</p>
                <Button onClick={signIn}>Sign in With Google</Button>
            </div>
        </div>
    )
}

export default Login
