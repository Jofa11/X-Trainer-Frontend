import React from 'react';
import { Container, Carousel, Card } from 'react-bootstrap';
import './App.css';
import curlman from './images/curlman.jpg';
import theRock from './images/The-Rock.jpg';
import lady from './images/Push-Up-Lady.jpg';



const Home = () => (
	<Container>
		<Card className='card-deck border-0 w-auto'>
			<Card.Body className='bg-dark'>
				<Card.Title className='text-center text-light'>
					<h1>X Trainer</h1>
				</Card.Title>
			</Card.Body>
		</Card>
		<br/>
		<br/>
		<Card className='card-deck border-0 w-auto'>
			<Card.Body className='bg-dark'>
				<Card.Title className='text-center text-light'>
					<h1>Are you ready?</h1>
				</Card.Title>
				<Card.Text className='list-group list-group-flush '>
					<p className='list-group-item text-center border-0 bg-dark text-light'>
						It is time to make gains<br></br> No more excuses <br></br>You can
						do this
						<br />
						Now let's go!
					</p>
				</Card.Text>
			</Card.Body>
		</Card>
		<br />
		<br />
		<Carousel className='height'>
			<Carousel.Item className='height'>
				<img
					className='d-block w-100 height'
					// src='https://cimg2.ibsrv.net/cimg/www.fitday.com/693x350_85-1/650/weightstech-230650.jpg'
					src={curlman}
					alt='Man doing concentration curls'
				/>
				<Carousel.Caption>
					<h3>Strength</h3>
					<p>All the exercises you need to build super strength</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className='height'>
				<img
					className='d-block w-100 height'
					// src='https://i.ytimg.com/vi/GHdua0i4Ghk/maxresdefault.jpg'
					src={theRock}
					alt='The Rock looking jacked'
				/>

				<Carousel.Caption>
					<h3>Determination</h3>
					<p>Always by your side to push you to your limits</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className='height'>
				<img
					className='d-block w-100 height'
					// src='https://i.pinimg.com/originals/aa/26/57/aa2657e8e393ad6ac35ec2016f86f7a9.jpg'
					src={lady}
					alt='Woman doing pushups'
				/>

				<Carousel.Caption>
					<h3>You've got this!</h3>
					<p>Show yourself what you are made of</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</Container>
);

export default Home;
