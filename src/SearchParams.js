import React,{useState,useEffect} from 'react'
import pet,{ANIMALS} from '@frontendmasters/pet'
import useDropDown from './useDropDown'

const SearchParams = () => {
    
    const [location,setLocation] = useState("Seattle Usa")
    const [breeds,setBreeds] = useState([])
    const [animal,AnimalDropDown] = useDropDown('Animal','dog',ANIMALS)
    const [breed ,BreedDropDown,setBreed] = useDropDown('Breed',"",breeds)
    
    useEffect(()=>{
        // pet.breeds("dog").then(console.log,console.error)
        setBreeds([]);
        setBreed("");
        pet.breeds(animal).then(({breeds})=>{
            const breedString = breeds.map(({name})=>name)
            setBreeds(breedString)
        },console.error)

    },[animal,setBreed,setBreeds])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(animal)
    }
    console.log(breeds)

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
                <AnimalDropDown />
                <BreedDropDown />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;