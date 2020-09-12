import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { APIURL } from './config.js';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


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
		<ListGroup defaultActiveKey='#link1'>
			{exercises.map((exercise) => (
				<ListGroupItem key={exercise.name}>
					<Link to={`/exercise/${exercise.id}`}>
						{exercise.name}
					</Link>
				</ListGroupItem>
			))}
		</ListGroup>
	);
}

export default ExerciseList;
