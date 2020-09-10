import React from 'react';
import { Form, Button, Row } from 'react-bootstrap';


const ExerciseForm = ({ exercise, handleSubmit, handleChange }) => {
    return (
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId='textarea'>
					<Form.Row>
						<Form.Label htmlFor='name'>Exercise Name</Form.Label>
						<Form.Control
							placeholder='Exercise Name'
							value={exercise.name}
							name='name'
							onChange={handleChange}
							required
							id='name'
						/>
					</Form.Row>
				</Form.Group>
				<Form.Row>
					<Form.Label htmlFor='description'>Exercise Description</Form.Label>
					<Form.Control
						placeholder='Exercise Description'
						value={exercise.description}
						name='description'
						onChange={handleChange}
						required
						id='description'
					/>
				</Form.Row>
				<Form.Row>
					<Form.Label htmlFor='url'>Copy and paste photo URL here.</Form.Label>
					<Form.Control
						placeholder='Exercise Photo'
						value={exercise.photoUrl}
						name='photo'
						onChange={handleChange}
						id='photo'
					/>
				</Form.Row>
				<Button type='submit'>Submit</Button>
			</Form>
		);
};

export default ExerciseForm;
