import React from 'react'
import pet from '@frontendmasters/pet'
import Carousel from './Carousel'
class Detail extends React.Component{
        state = {
            loading:true
        }

    componentDidMount(){
        pet.animal(this.props.match.params.id)
            .then(({animal})=>{
                console.log("animal",animal)
                this.setState({
                    name:animal.name,
                    animal:animal.type,
                    location:`${animal.contact.address.city} , ${animal.contact.address.state}`,
                    description:animal.description,
                    media:animal.photos,
                    breed:animal.breeds.primary,
                    loading:false
                })
            })
    }
    render() {
        if(this.state.loading){
            return <h1>Loading...</h1>
        }
        const {name,animal,breed,location,description,media} = this.state
        console.log(media)
        console.log(description);
        return(
            <div className="details">
                <Carousel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <button>Adopt {name} </button>
                    <p>{description}</p>
                </div>
            </div>
        )

    }
}

export default Detail