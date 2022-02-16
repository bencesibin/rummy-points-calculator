import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Login() {
    const { currentUser, register, login, logout, signInWithGoogle } = useAuth()

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    return (
        <div className="App">
            <div>
                <h3> Register User </h3>
                <input
                    placeholder="Email..."
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }}
                />
                <input
                    placeholder="Password..."
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />

                <button onClick={() => register(registerEmail, registerPassword)}> Create User</button>
            </div>

            <div>
                <h3> Login </h3>
                <input
                    placeholder="Email..."
                    onChange={(event) => {
                        setLoginEmail(event.target.value);
                    }}
                />
                <input
                    placeholder="Password..."
                    onChange={(event) => {
                        setLoginPassword(event.target.value);
                    }}
                />

                <button onClick={() => login(loginEmail, loginPassword)}> Login</button>

            </div>

            <div>
                <h3> Login With Google </h3>
                <button onClick={() => signInWithGoogle()}> Login With Google </button>
            </div>

            <h4> User Logged In: </h4>
            {currentUser?.email}

            <button onClick={logout}> Sign Out </button>
        </div>
    )
}
