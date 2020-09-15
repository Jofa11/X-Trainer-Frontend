import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ExerciseList from './ExerciseList';
import ExerciseDetail from './ExerciseDetail';
import CreateExercise from './CreateExercise';
import ExerciseEdit from './ExerciseEdit';
import Home from './Home';
import Navbar from './Navbar';
import SignUp from './SignUp';
import SignIn from './SignIn';
import About from './About';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import './styles/Containers.css';

function App() {
	return (
		<Container className='app'>
			<Container className='nav'>
				<Navbar component={Navbar} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/signin' component={SignIn} />
			</Container>
			<Container className='routes'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/exercise' component={ExerciseList} />
					<Route exact path='/exercise/:id' component={ExerciseDetail} />
				</Switch>
			</Container>
		</Container>
	);
}

export default App;
