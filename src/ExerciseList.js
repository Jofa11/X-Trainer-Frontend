import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from './config.js';


function ExerciseList(props) {
	const [exercises, setExercises] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
        fetch(`${APIURL}/exercise`)
            .then(response => response.json())
			.then((data) => {
				setExercises(data);
			})
			.catch(() => {
				setError(true);
			});
	}, []);

	if (error) {
		return (
			<div>
				Sorry, there was a problem retrieving the exercises. Please try again.
			</div>
		);
	}

	if (exercises.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<ul>
			{exercises.map((exercise) => (
				<li key={exercise._id}>
					<Link to={`/exercise/${exercise.id}`}>{exercise.name}</Link>
				</li>
			))}
		</ul>
	);
}

export default ExerciseList;
