import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class SearchResult extends Component {
    static propTypes = {

    }

    render() {
        const { photos } = this.props
        console.log("check", photos instanceof Array)
        console.log(photos && photos[0].urls.small)
        return (
            // <div><img src={photos && photos[0].urls.small} /></div>
            <div>
                
            {
               photos && photos.map((photo, index) => {
                    return (
                        <a href={photo && photo.urls.full} key={index}>
                             <img src={photo && photo.urls.small} />
                        </a>
                       
                    )
            }) 
            }
            </div>      
        )
    }
}

export default SearchResult
