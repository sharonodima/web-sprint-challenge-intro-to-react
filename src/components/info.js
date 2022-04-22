import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 2px solid white;
  }
  `

export default function info() {
    const [info, setInfo] = useState(null)
  
    useEffect(() => {
      axios.get("https://swapi.dev/api/people")
        .then(response => {
            setInfo(response.data.result)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])
    
  
    return (
      <StyledInfo>
        <h2>Information:</h2>
        { <>
            <p>Height is {info.height}</p>
            <p>Mass is {info.mass}</p>
            <p>Hair Color is {info.hair_color}</p>
            <p>Skin Color  is {info.skin_color}</p>
          </>
        }
        <Button color="success" onClick={close}>Close</Button>
      </StyledInfo>
    )
  }