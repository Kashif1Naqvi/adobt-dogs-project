import React,{useState,useEffect} from 'react'
import {ANIMALS} from '@frontendmasters/pet'


const SearchParams = () => {
    
    const [location,setLocation] = useState("Seattle Usa")
    const [animal,setAnimal] = useState('dog')
    const [breeds, setBreeds] = useState([])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(animal)
    }

    return(
        <div className="search-params">
            <h1>{location}</h1>
            <form onSubmit={handleSubmit} >
                <label htmlFor="location">Location
                    <input 
                        type="text" 
                        id="location" 
                        value={location} 
                        placeholder="Location"
                        onChange={e=>setLocation(e.target.value)}

                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select 
                        id="animal" 
                        value={animal} 
                        onChange={e=>setAnimal(e.target.value)} 
                        onBlur={e=>setAnimal(e.target.value)} 
                    >  
                        <option value="">All</option>
                        {ANIMALS.map(animal=> <option key={animal} value={animal}>{animal}</option> ) }
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select  
                        id="breeds" 
                        value={breeds} 
                        onChange={e=>setBreed(e.target.value)} 
                        onBlur={e => setBreed(e.target.value)}
                        disabled={breeds.length===0}
                        >
                            <option>All</option>
                            {
                                breeds.map(breedString => <option value={breedString}>breedString</option>)
                            }

                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;