import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [gen, setGen] = useState("");

const handleSubmit =(e) =>{
    e.preventDefault() 
}



    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input placeholder='name' value={name}
                    onChange={(e) => {
                        setName(e.target.value
                        )
                    }} />
                <br />
                <br />
                <input placeholder='name'
                    value={gen}
                    onChange={(e) => {
                        setGen(e.target.value)
                    }} />
                    <br/>
                    <br/>
                    <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;