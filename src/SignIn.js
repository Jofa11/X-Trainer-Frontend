import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container } from 'react-bootstrap';
import { APIURL } from './config.js';
import './styles/Containers.css';
import axiosInstance from "./axiosApi.js";

function SignIn() {
	const { register, handleSubmit, errors } = useForm();
	const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

	const data = { username, password };

	const onSubmit = (event) => {
		// event.preventDefault();
		console.log(event);
		fetch(`${APIURL}/api/token/`, {
			method: 'POST',
			headers: {
        		'Content-Type': 'application/json',
                Authorization: 'JWT ' + localStorage.getItem('access_token'),
		        accept: 'application/json',
			},
			body: JSON.stringify(data),
		    })
			.then((response) => {
				console.log(response);
				localStorage.setItem('access_token', response.data.access);
				localStorage.setItem('refresh_token', response.data.refresh);
				window.location = '/';
			})
            // try {
            // const response = axiosInstance.post('api/token/', {
            //     username: username,
            //     password: password
            // });
            // axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
            // localStorage.setItem('access_token', response.data.access);
            // localStorage.setItem('refresh_token', response.data.refresh);
            // console.log(response)
            // window.location = '/';
            // return data;
            // }
            .catch((error) => {
                console.log(error)
                setError({ error: true })
                setErrorMessage({ errorMessage: 'Login Failed' })
            });
        }  
    

	return (
		<Container className='mainContainer'>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group controlId='formBasicName'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						name='username'
						type='username'
						placeholder='Enter Username'
						ref={register({ required: true })}
						value={username}
						onChange={(event) => setUsername(event.target.value)}
					/>
					{errors.name && <p>This is required</p>}
				</Form.Group>

				<Form.Group controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						name='password'
						type='password'
						placeholder='Password'
						ref={register({ required: true })}
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					{errors.name && <p>This is required</p>}
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default SignIn;
