import "./SearchBar.css";
import { useState } from "react";

function ImageSearch({onSubmit}){

    const [term, setTerm] = useState('');

    function handleFormSubmit(e){
        e.preventDefault();
        onSubmit(term)

    }
    const handleChange = (e)=>{
        setTerm(e.target.value);
    }

    return <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
            <input value={term} onChange={handleChange}/>
        </form>
    </div>
}

export default ImageSearch;