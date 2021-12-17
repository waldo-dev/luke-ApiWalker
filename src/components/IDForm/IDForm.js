import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { getResource } from '../../actions/getResource';

const Idform = (props) => {
  const { categoria, setResultado } = props;
  const [swapiId, setSwapiId] = useState(1)

  useEffect(() => {
    setResultado(null)
  }, [categoria])

  const onSubmit = (e) => {
    e.preventDefault();
    const url = categoria + '/' + swapiId;
    getResource(url).then((obj) => setResultado(obj))
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="swapi-id">ID</label> 
      <input type="number" id="swapi-id" name="swapi-id" value={swapiId} onChange={(e) => setSwapiId(e.target.value)}/>
      <button>Buscar</button>
    </form>
  );
}

export default Idform;
