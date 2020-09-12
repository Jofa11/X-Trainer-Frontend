import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { APIURL } from './config.js';
import ExerciseForm from './ExerciseForm.js';


function CreateExercise() {
	const initialExerciseState = {
		name: '',
		description: '',
		photoUrl: '',
	};
	const [exercise, setExercise] = useState(initialExerciseState);
	const [createdId, setCreatedId] = useState(null);
	const [error, setError] = useState(false);

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
				Authorization: 'JWT ' + localStorage.getItem('refresh_token'),
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(exercise),
		}).then((response) => response.json())
			.then((data) => {
				setCreatedId(data.id);
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
      <ExerciseForm
        exercise={exercise}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );

};

export default CreateExercise;
