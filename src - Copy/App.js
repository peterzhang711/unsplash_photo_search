import React, { Component} from 'react';
import SearchBar from './containers/searchBar'
import SearchCount from './containers/searchCount'
import SearchResult from './components/searchResult'
import { connect } from 'react-redux'
import { fetchPhotos, updateSearchItem, updateStartPage, updateTotalPage } from './store/action'

class App extends Component {

  componentDidMount(){
    const {searchItem,startPage,totalPage} = this.props
    this.props.fetchPhotos(searchItem,startPage,totalPage)
  }


    handleSearchItem = (item) => {
      console.log(item)
      this.props.updateSearchItem(item)
      this.props.fetchPhotos(item)
    }
  


  render(){
      const {photos, searchItem} = this.props
      console.log(photos?.results)
      console.log(photos)
      console.log(photos && photos.results[0].urls.full)
      console.log(searchItem)

    return (
      <div className="App">
        <h1>Unsplash Photo Search</h1>
        <SearchBar searchItem={this.props.searchItem} handleSearchItem={this.handleSearchItem}/>
        <SearchCount />
        <br/>
        <SearchResult photos={photos?.results}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchItem: state.searchReducer.searchItem,
    photos: state.fetchReducer.photos,
    startPage: state.searchReducer.startPage,
    totalPage: state.searchReducer.totalPage
  }
}

const mapDispatchToProps = {
    fetchPhotos: fetchPhotos,
    updateSearchItem: updateSearchItem,
    updateStartPage: updateStartPage,
    updateTotalPage: updateTotalPage
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
