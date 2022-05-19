import axios from "axios";
import React from "react";
//import swal from '@sweetalert/with-react'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (email === '' || password === '') {
            toast.error("Completa todos los campos.")
            return;
        }
        if (email !== '' && !regexEmail.test(email)) {
            toast.error("Mail Invalido.")
            return;
        }
        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            toast.error("Credenciales Invalidas.")
            return;
        }
        toast('Bienvenido Alkemy!', {
            icon: '✔️ 👋🏼',
        });
        axios.post('http://challenge-react.alkemy.org', {
            email, password
        })
        .then(res => {
            const token = res.data.token;
            sessionStorage.setItem('token', token);
        })
        navigate('/home')
    };

    return (
        <div className="container w-75">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h1 className="text-center mt-3">Login</h1>
            <form onSubmit={handleSubmit}>

                <label className="form-label">Email</label>
                <input className="form-control" type="text" name="email" placeholder="example@mail.com"/>
                <br />
                <label className="form-label">Password</label>
                <input className="form-control" type="password" name="password" placeholder="********"/>
                <br />
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn-secondary rounded">Login</button>
                </div>
                
            </form>
        </div>
    );
};
