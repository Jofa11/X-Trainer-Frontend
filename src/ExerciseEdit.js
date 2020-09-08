import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from './config.js';
import ExerciseForm from './ExerciseForm.js';

const ExerciseEdit = ({ match }) => {
	const [exercise, setExercise] = useState(null);
	const [createdId, setCreatedId] = useState(null);
	const [error, setError] = useState(false);

	useEffect(() => {
		const url = `${APIURL}/exercise/${match.params.id}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setExercise({
					name: data.name,
					description: data.description,
					photo: data.photo_url,
				});
			})
			.catch(() => {
				setError(true);
			});
	}, [match.params.id]);

	const handleChange = (event) => {
		event.persist();
		setExercise({
			...exercise,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const url = `${APIURL}/exercise/`;

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(exercise),
		})
			.then((response) => response.json())
			.then((data) => {
				setCreatedId(data._id);
			})
			.catch(() => {
				setError(true);
			});
	};

	if (createdId) {
		return <Redirect to={`/exercise/${createdId}`} />;
	}
	return (
		<>
			<h3>Create an Exercise</h3>
			{error && <p>Something went wrong... Please try again!</p>}
			{exercise && (
				<ExerciseForm
					exercise={exercise}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
				/>
			)}
		</>
	);
};

export default ExerciseEdit;