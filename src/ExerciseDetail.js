import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { APIURL } from './config.js';

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
		<div>
			<h2>{exercise.name}</h2>
			<p>{exercise.description}</p>
            <img src={exercise.photo_url}/>
			<button onClick={onDeleteExercise}>Delete Exercise</button>
			<Link to={`/exercise/${match.params.id}/edit`}>Update Exercise</Link>
		</div>
	);
}

export default ExerciseDetail;
