import React,{useState,useEffect,useContext} from 'react'
import pet,{ANIMALS} from '@frontendmasters/pet'
import useDropDown from './useDropDown'
import Result from './Result'
import themeContex from './Contex'


const SearchParams = () => {
    const [theme] = useContext(themeContex)    
    const [location,setLocation] = useState("Seattle Usa")
    const [breeds,setBreeds] = useState([])
    const [animal,AnimalDropDown] = useDropDown('Animal','dog',ANIMALS)
    const [breed ,BreedDropDown,setBreed] = useDropDown('Breed',"",breeds)
    const [pets,setPets] = useState([])

    async function requestPet(){
        const {animals} = await pet.animals({
            location,
            breed,
            type:animal 
        })
        
        setPets(animals || []);
    }

    useEffect(()=>{
        // pet.breeds("dog").then(console.log,console.error)
        setBreeds([]);
        setBreed("");
        pet.breeds(animal).then(({breeds:apiBreeds})=>{
            const breedString = apiBreeds.map(({name})=>name)
            setBreeds(breedString)
        },console.error)

    },[animal,setBreed,setBreeds])

 
    
    console.log('dasdas',theme);
    return(
        <div className="search-params">
            <h1>{location}</h1>
            <form onSubmit={(e)=>{
                e.preventDefault();
                requestPet();
            }} >
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
                <button style={{backgroundColor:theme}} >Submit</button>
            </form>
            <Result pets={pets} />
        </div>
    )
}

export default SearchParams;