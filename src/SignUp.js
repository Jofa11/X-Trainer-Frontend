import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Container } from 'react-bootstrap';
import { APIURL } from './config.js';
import './styles/Containers.css';

function SignUp() {
	const { register, handleSubmit, errors } = useForm();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

	const data = { name, email, password };

	const onSubmit = (event) => {
		// event.preventDefault();
		console.log(event);
		fetch(`${APIURL}/users/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		    })
			.then((response) => response.json())
			.then((response) => {
				window.location = '/signIn';
            })
            .catch((error) => {
                setError({ error: true })
                setErrorMessage({ errorMessage: error.response.data })
            })
	};
	return (
		<Container className='mainContainer'>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group controlId='formBasicName'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						name='name'
						type='name'
						placeholder='Name'
						ref={register({ required: true })}
						value={name}
						onChange={(event) => setName(event.target.value)}
					/>
					{errors.name && <p>This is required</p>}
				</Form.Group>

				<Form.Group controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						name='email'
						type='email'
						placeholder='Enter email'
						ref={register({ required: true })}
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
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

export default SignUp;
