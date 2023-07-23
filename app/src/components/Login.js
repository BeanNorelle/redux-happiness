import React from "react";
import { useDispatch } from "react-redux";
import {login, logout} from '../features/user';

function Login() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>{dispatch(login({name: "Juan", age: 20, email:"name.@mail.com"})) 
            }}>Login</button>

            <button onClick={()=>{dispatch(logout({name: "", age: 0, email:""})) 
            }}>Logout</button>
        </div>
    );
}

export default Login;