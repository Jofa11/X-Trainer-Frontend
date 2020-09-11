import React from 'react';
// import { Link } from 'react-router-dom';
import { Nav, Link } from 'react-bootstrap';
 
const Navbar = () => (
	<Nav>
		<Nav.Item>
			<Nav.Link href='/signup'>Sign Up</Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link href='/signin'>Sign In</Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link href='/'>Home</Nav.Link>
		</Nav.Item>
		<Nav.Item>
			<Nav.Link href='/exercise/create'>Create Exercise</Nav.Link>
		</Nav.Item>
		<Nav.Item>
		<Nav.Link href='/exercise'>All Exercises</Nav.Link>
		</Nav.Item>
	</Nav>
);

export default Navbar;
