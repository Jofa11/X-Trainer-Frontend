import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { APIURL } from './config.js';
import { Container, Row, Col, Image, Jumbotron, Button } from 'react-bootstrap';
import './App.css'

function ExerciseDetail({ match }) {
	const [deleted, setDeleted] = useState(false);
	const [exercise, setExercise] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		const url = `${APIURL}/exercise/${match.params.id}`;
		fetch(url)
			.then((response) => response.json())
			.then(setExercise)
			.catch(() => {
				setError(true);
			});
	}, [match.params.id]);

	const onDeleteExercise = (event) => {
		const url = `${APIURL}/exercise/${match.params.id}`;
		fetch(url, { method: 'DELETE' })
			.then((res) => {
				setDeleted(true);
			})
			.catch(console.error);
	};
	// If we deleted the exercise, redirect back to the exercises list
	if (deleted) {
		return <Redirect to='/exercise' />;
	}

	if (error) {
		return (
			<div>
				Sorry, there was a problem retrieving the exercise. Please try again.
			</div>
		);
	}

	if (!exercise) {
		return <div>Loading...</div>;
	}

	return (
		<Container className='detail'>
			<Jumbotron>
				<h2>{exercise.name}</h2><br />
				<p>{exercise.description}</p>
			</Jumbotron>
			<Row>
				<Col xs={12} md={12}>
					<Image src={exercise.photo_url} fluid />
				</Col>
			</Row>
			<Button onClick={onDeleteExercise}>Delete Exercise</Button>
			<Link to={`/exercise/${match.params.id}/edit`}>Update Exercise</Link>
		</Container>
	);
}

export default ExerciseDetail;
