import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Exlist from './Exlist';
import Exdetail from './Exdetail';
import CreateExercise from './CreateExercise';
import Home from './Home';
import Navbar from './Navbar'
import { Nav, Container, Row, Col } from 'react-bootstrap';

function App() {
	return (
		<Container className='app'>
			<Container className='nav'>
				<Navbar component={Navbar} />
			</Container>
			<Container className='routes'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/exercise/create' component={CreateExercise} />
					<Route exact path='/exercise' component={Exlist} />
					<Route exact path='/exercise/:id' component={Exdetail} />
					<Route exact path='/exercise/:id/edit' component={ExerciseEdit} />
				</Switch>
			</Container>
		</Container>
	);
}

export default App;
