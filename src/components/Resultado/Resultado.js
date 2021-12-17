import React from 'react';

const Resultado = (props) => {
  const {data} = props;
  let title = '';

  if(!data) return null;
  if(data === "Not Found") return <> 
    <h2>Estos no son los droides que estas buscando</h2>
    <img src="https://www.cinemascomics.com/wp-content/uploads/2020/10/OBI-WAN-KENOBI.jpg" alt="obi one kenobi"/>
   </> 
  

  const entries = Object.entries(data.properties);
  entries.map(([key, value], i) => {
    console.log(key, value)
    if(key === 'name'){
      title = value
    }
    console.log(title)
  })
  
  const lista = entries.map(([key, value], i) => {
    if(i === 0) return null;
    return <li key={i}>{key} : {value}</li>
  })
  
  return (
    <div>
      <h2>{title}</h2>
      <ul>
      {lista}    
      </ul>
    </div>
  );
}

export default Resultado;
