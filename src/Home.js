import React from 'react';
import { Container, Jumbotron, Carousel } from 'react-bootstrap';

const Home = () => (
	<Container>
		<Jumbotron>
			<h1>Welcome to my app!</h1>
		</Jumbotron>
		<Carousel>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src='https://cimg2.ibsrv.net/cimg/www.fitday.com/693x350_85-1/650/weightstech-230650.jpg'
					alt='First slide'
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src='https://i.ytimg.com/vi/GHdua0i4Ghk/maxresdefault.jpg'
					alt='The Rock looking jacked'
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src='https://i.pinimg.com/originals/aa/26/57/aa2657e8e393ad6ac35ec2016f86f7a9.jpg'
					alt='Woman doing pushups'
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	</Container>
);

export default Home;
