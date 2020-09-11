import React from 'react';
import { Nav } from 'react-bootstrap';

const Navbar = () => {

	const logOff = () => {
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
	};
	if (
		localStorage.refresh_token === '' ||
		localStorage.refresh_token === undefined
	) {
		return (
			<Nav>
				<Nav.Item>
					<Nav.Link href='/signup'>Sign Up</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='/signin'>Sign In</Nav.Link>
				</Nav.Item>
			</Nav>
		);
	} else {
		return (
			<Nav>
				<Nav.Item>
					<Nav.Link href='/'>Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='/exercise/create'>Create Exercise</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='/exercise'>All Exercises</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href='/' onClick={logOff}>
						Log Off
					</Nav.Link>
				</Nav.Item>
			</Nav>
		);
	}
};

export default Navbar;
