import React, { useState } from 'react';

const SimpleForm = () =>{

    const [value, setValue] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(value);
        setValue('Test');
    }

    const handleChange = (e) =>{
        setValue(e.target.value);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={value} type="text"/>
            <input onChange={handleChange} value={value} type="text"/>
            <button>Add</button>
        </form>
        </>
    );
}

export {SimpleForm};