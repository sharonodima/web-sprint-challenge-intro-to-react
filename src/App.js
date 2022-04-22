import React, { useEffect, useState } from 'react';
import Character from './components/Character.js';
import axios from "axios";
import styled from 'styled-components';
import './App.css';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;    
    width: 100%;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  let title = "REACT WARS  >";
  return (
    <StyledContainer className="App">
      <h1 className="Header">{title}</h1>
      {characters.map((character, idx) => <Character
        key={idx}
        info={character}
        name={character.name}
        birthYear={character.birth_year}
        height={character.height}
        mass = {character.mass}
        hairColor = {character.hair_color}
        skinColor = {character.skin_color}
        gender = {character.gender}
      />)}
    </StyledContainer>
  );
};

export default App;
