import React, { useState } from 'react';

function SearchHeader({search}) {
const [labelValue, setLabelValue] = useState('')

const handleLabel = (event)=>{
setLabelValue(event.target.value)
}
const handleSubmit =(event)=>{
    event.preventDefault();
search (labelValue);
console.log(search)
}
    return (
    <div className="search-header">
        <form onSubmit={handleSubmit}>
        <label >Ne Arıyorsunuz ?</label>
        <input value={labelValue} onChange={handleLabel}></input>
        
        </form>
    </div>  );
}

export default SearchHeader;