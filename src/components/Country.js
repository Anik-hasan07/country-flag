import React from 'react'

const Country = (props) => {
    console.log(props);
    const{name,flag} = props.country
  return (
    <div>
        <h2>Name:{name}</h2>
        <img src={flag}/>
      
    </div>
  )
}

export default Country
