import './App.css';
import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';
import contactServices from './services/contacts';
import PersonForm from './Components/PersonForm';
import Filter from './Components/Filter';
import Contacts from './Components/Contacts';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ searchValue, setSearchValue ] = useState('');

  useEffect(() => {
    contactServices
      .getAll()
      .then(response => {
        console.log('success', response);
        setPersons(response);
      })
  },[])

  const handleChange = (event) => {
    switch(event.target.name) {
      case "name" : setNewName(event.target.value); break;
      case "number": setNewNumber(event.target.value); break;
      case "search": setSearchValue(event.target.value); break;
      default: break;
    }
  }

  const handleAddPerson = (event) => {
    event.preventDefault();
    
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook!`)
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: uuidv4(),
    };
    contactServices.create(newPerson)
      .then(response => {
        setPersons(persons.concat(response));
        setNewName('');
        setNewNumber('');
      })
  }

  const handleDeletePerson = (event) => {
    const id = event.target.id;
    contactServices.remove(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id))
      })
  }



  return (
    <div>
      <h1>Phonebook</h1>

      <h2>Add a New Contact:</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleChange={handleChange} addPerson={handleAddPerson}/>
      
      <h2>Numbers</h2>
      <Filter handleChange={handleChange} searchValue={searchValue}/>
      <Contacts persons={persons} searchValue={searchValue} handleDelete={handleDeletePerson}/>
    </div>
  )
}

export default App