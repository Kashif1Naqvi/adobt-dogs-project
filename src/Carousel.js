import React, { Component} from 'react'

class Carousel extends Component{
    state = {
        photos:[],
        active:0
    }

    

    handleIndexClick = (e) => {
        this.setState({
            active : +e.target.dataset.index
        })
    }

    static getDerivedStateFromProps({media}){

        let photos = ["http://placecorgi.com/600/600"]
        if(media.length){
            photos = media.map(({large})=>large)
        }
        return {photos}
    }

    render() {
        
        const {photos,active} = this.state
        console.log(photos);
        return(
            <div className="carousel" >
                <img src={photos[active]} alt='animal' />
                <div className="carousel-smaller">
                    {this.props.media.map((photo,index) => (
                        <img 
                            key={photo.large}
                            onClick={this.handleIndexClick}
                            data-index={index}
                            src={photo.large}
                            className={index === active ? "active": ""}
                            alt="animal-thumbnail"
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel