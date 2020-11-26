import './App.css';
import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import contactServices from './services/contacts';
import PersonForm from './Components/PersonForm';
import Filter from './Components/Filter';
import Contacts from './Components/Contacts';
import Notification from './Components/Notification';

const App = () => {
	const [ persons, setPersons ] = useState([]);
	const [ newName, setNewName ] = useState('');
	const [ newNumber, setNewNumber ] = useState('');
	const [ searchValue, setSearchValue ] = useState('');
	const [ message, setMessage ] = useState(null);
	const [ isError, setIsError ] = useState(false);

	useEffect(() => {
		contactServices
			.getAll()
			.then(response => {
				setPersons(response);
			});
	},[isError]);

	const handleChange = (event) => {
		switch(event.target.name) {
		case 'name' : setNewName(event.target.value); break;
		case 'number': setNewNumber(event.target.value); break;
		case 'search': setSearchValue(event.target.value); break;
		default: break;
		}
	};

	const handleAddPerson = (event) => {
		event.preventDefault();
		const person = persons.find(person => person.name === newName);

		if (person) {
			window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`);
			const changedPerson = {...person, number: newNumber};
      
			updatePerson(person.id, changedPerson);
			return;
		}

		const newPerson = {
			name: newName,
			number: newNumber,
			id: uuidv4(),
		};
		addPerson(newPerson);

	};

	const addPerson = (newPerson) => {
		contactServices.create(newPerson)
			.then(response => {
				setPersons(persons.concat(response));
				setNewName('');
				setNewNumber('');
				setMessage(`${newPerson.name} has been added`);
				setTimeout(() => {
					setMessage(null);
				}, 5000);
			})
			.catch(errorHandler);
	};

	const updatePerson = (id, changedPerson) => {
		contactServices.update(id, changedPerson)
			.then(returnedPerson => {
				setPersons(persons.map(person => person.name !== newName ? person : returnedPerson));
				setNewName('');
				setNewNumber('');
				setMessage(`${changedPerson.name} has been updated`);
				setTimeout(() => {
					setMessage(null);
				}, 5000);
			})
			.catch(errorHandler);
	};

	const handleDeletePerson = (event) => {
		const name = event.target.name;
		const id = event.target.id;
		if (window.confirm(`Delete ${name} from phonebook? Note that this action is not reversible.`)) {
			contactServices.remove(id)
				.then(() => {
					setPersons(persons.filter(person => person.id !== id));
					setMessage(`${name} has been removed`);
					setTimeout(() => {
						setMessage(null);
					}, 5000);
				})
				.catch(errorHandler);
		} 
	};

	const errorHandler = (error) => {
		setIsError(true);
		setMessage(`${error.error}`);
		setTimeout(() => {
			setMessage(null);
			setIsError(false);
		}, 5000);
	};

	return (
		<div>
			<h1>Phonebook</h1>
			<Notification message={message} isError={isError} />

			<h2>Add a New Contact:</h2>
			<PersonForm newName={newName} newNumber={newNumber} handleChange={handleChange} addPerson={handleAddPerson}/>
      
			<h2>Numbers</h2>
			<Filter handleChange={handleChange} searchValue={searchValue}/>
			<Contacts persons={persons} searchValue={searchValue} handleDelete={handleDeletePerson}/>
		</div>
	);

  
};

export default App;