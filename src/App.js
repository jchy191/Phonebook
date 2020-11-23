import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonForm from './Components/PersonForm';
import Filter from './Components/Filter';
import Contacts from './Components/Contacts';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ searchValue, setSearchValue ] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        console.log('success', res);
        setPersons(res.data);
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

  const addPerson = (event) => {
    event.preventDefault();
    
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook!`)
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    setPersons([...persons, newPerson]);
    setNewName('');
    setNewNumber('');
  }



  return (
    <div>
      <h1>Phonebook</h1>

      <h2>Add a New Contact:</h2>
      <PersonForm newName={newName} newNumber={newNumber} handleChange={handleChange} addPerson={addPerson}/>
      
      <h2>Numbers</h2>
      <Filter handleChange={handleChange} searchValue={searchValue}/>
      <Contacts persons={persons} searchValue={searchValue}/>
    </div>
  )
}

export default App