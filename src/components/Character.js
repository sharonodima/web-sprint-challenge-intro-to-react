// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-style: solid;
    border-color: green;
    border-width: 1px;
    width: 60%;
    margin-bottom: 20px;
    padding: 10px;
    align-self: center;
    color: white
  `
const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    font-size: 20px;
    font-family: 'Press Start 2P', cursive;
`;

const StyledBody = styled.div`
  
`

const StyledName = styled.div`
    
`;

const StyledButton = styled.button`
    color: red;
    background-color: #585A5A;
    color: #361F51;
    padding: 8px;
    border-radius: 10px; 
`;

const Character = (props)=> {
    const [open, setOpen] = useState(false);
  return (
    <StyledContainer>
    <StyledHeader>
        <StyledName>{props.name}</StyledName>
        <StyledButton onClick={() => setOpen(!open)}>{props.birthYear}</StyledButton>
    </StyledHeader>
    {open && <StyledBody>
        
        <p>Height: {props.height}</p>
        <p>Mass: {props.mass}</p>
        <p>Hair Color: {props.hairColor} </p>
        <p>Skin Color: {props.skinColor} </p>
        <p>Gender: {props.gender} </p>

    </StyledBody>
    }
    </StyledContainer>
  );
}

export default Character; 
