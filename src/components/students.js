import React from 'react'
import { useSelector } from 'react-redux'
import List from './List';



const Students = () => {
  const students=useSelector((state) => state.students);
  const pupils=students.user
  return (
    <div>
        {pupils.map((item) =>{
         return (
         <div key={item.id}>
          <List student={item}/>
           </div>  
          )
        })}
    </div>
  )
}

export default Students