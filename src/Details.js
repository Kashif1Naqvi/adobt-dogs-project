import React from 'react'
import pet from '@frontendmasters/pet'
import Carousel from './Carousel'
import ErrorBoundary from './ErrorBoundary'
import Modal from './Modal';
import themeContex from './Contex'

class Details extends React.Component{
        state = {
            loading:true,model:false
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
                    loading:false,
                    url: animal.url
                })
            })
    }

    toggle = () =>{
        this.setState({
            model:!this.state.model
        })
    }
    adoptMe = () => {
        window.location.href = this.state.url;
    }
    
    render() {
        if(this.state.loading){
            return <h1>Loading...</h1>
        }
        const {name,animal,breed,location,description,media,model,url} = this.state
        return(
            <div className="details">
                <Carousel media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${breed} - ${location}`}</h2>
                    <themeContex.Consumer>
                        {([theme])=>(
                            <button onClick={this.toggle} style={{backgroundColor:theme}} >Adopt {name} </button>
                        )}
                    </themeContex.Consumer>
                    
                    <p style={{textAlign:'center'}} >{description}</p>
                    {
                        model ? (
                            <Modal>
                                <div>
                                    <h1>Would you like to adopt {name}</h1>
                                    <div className="buttons">
                                        <a href={url} target="_blank" >
                                            <button>Yes</button>
                                        </a>
                                        <button onClick={this.toggle} >Close</button>
                                    </div>
                                </div>
                            </Modal>
                        ):null
                    }
                </div>
            </div>
        )

    }
}

export default function DetailsErrorBoundary(props) {
    return (
      <ErrorBoundary>
        <Details {...props} />
      </ErrorBoundary>
    );
}