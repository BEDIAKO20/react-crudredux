import React from 'react'

const List = ({student}) => {
  
  return (
    <div>
      
        <h2>{student.name}</h2>
        <h3>{student.gen}</h3>
        <button>edit</button>
        <button>delete</button>
    </div>
  )
}

export default List