import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<>
		<Link to='/signup'>Sign Up</Link>
		<Link to='/signin'>Sign In</Link>
		<Link to='/'>Home</Link>
		<Link to='/exercise/create'>Create Exercise</Link>
		<Link to='/exercise'>All Exercises</Link>
	</>
);

export default Navbar;
