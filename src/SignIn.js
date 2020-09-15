import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container, Image } from 'react-bootstrap';
import { APIURL } from './config.js';
import './styles/Containers.css';
import logo from './images/XTrainerlogo.jpeg';


function SignIn() {
	const { register, errors } = useForm();
	const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

	const data = { username, password };

	const handleSubmit = (event) => {
		event.preventDefault();
		fetch(`${APIURL}/api/token/`, {
			method: 'POST',
			headers: {
        		'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		    }).then((response) => response.json())
			.then((response) => {
				console.log(response.access);
				localStorage.setItem('access_token', response.access);
                localStorage.setItem('refresh_token', response.refresh);
                localStorage.setItem('username', response.username)
				if (response.refresh) {
					window.location = './';
				}
			})
            .catch((error) => {
                console.log(error)
                setError({ error: true })
                setErrorMessage({ errorMessage: 'Login Failed' })
            });
        }  
    

	return (
		<Container className='mainContainer'>
			<Form onSubmit={handleSubmit}>
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
					{errors.username && <p>This is required</p>}
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
			<Image src={logo} thumbnail fluid />
		</Container>
	);
}

export default SignIn;
