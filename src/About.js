import React from 'react';
import { Container, Card, Nav } from 'react-bootstrap';
import './App.css';


const About = () => (
	<Container>
		<Card className='card-deck border-0 w-auto'>
			<Card.Body className='bg-dark'>
				<Card.Title className='text-center text-light'>
						<h1>X Trainer</h1>
				</Card.Title>
			</Card.Body>
		</Card>
		<br />
		<Card style={{ width: '100%' }}>
			<Card.Img
				variant='top'
				src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/arnold-schwarzenegger-free-home-bodyweight-workout-1584944227.jpg'
			/>
			<Card.Body>
				<Card.Title className='text-center'>
					Make it Happen With X Trainer
				</Card.Title>
				<Card.Text>
					X Trainer was created to help people get the most out of their
					workouts. One app that contains all the information you need at your
					fingertips to customize a fitness routine built for your needs. Now
					get to it!
				</Card.Text>
			</Card.Body>
		</Card>
		<br />
		<Card className='card-deck border-0 w-auto'>
			<Card.Body className='bg-dark'>
				<Card.Title className='text-center text-light'>
					<h5>This site created by Joshua Favre</h5>
					<Nav className='justify-content-center'>
						<Nav.Item>
							<Nav.Link href='linkedin.com/in/joshua-favre'>LinkedIn</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href='https://github.com/Jofa11'>GitHub</Nav.Link>
						</Nav.Item>
					</Nav>
				</Card.Title>
			</Card.Body>
		</Card>
	</Container>
);

export default About;