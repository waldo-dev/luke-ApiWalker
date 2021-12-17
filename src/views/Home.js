import React, { useEffect, useState } from 'react';
import { getResource } from '../actions/getResource';
import Dropdown from '../components/DropDown/DropDown';
import Idform from '../components/IDForm/IDForm';
import Resultado from '../components/Resultado/Resultado';

const Home = (props) => {
  const {personId} = props
  const [categoria, setCategoria] = useState('');
  const [resultado, setResultado] = useState('');

  useEffect(() => {
    const personUrl = "https://www.swapi.tech/api/people/";
    const url = personUrl + personId;
    getResource(url).then(obj => setResultado(obj)) 
  }, [personId])

  return (
    <div>
      <Dropdown setCategoria={setCategoria}/>
      <Idform categoria={categoria} setResultado={setResultado}/>
      <Resultado data={resultado} />
    </div>
  );
}

export default Home;
