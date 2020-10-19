import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from './containers/searchBar'
import SearchCount from './containers/searchCount'
import SearchResult from './components/searchResult'
import { connect } from 'react-redux'
import { fetchPhotos, updateSearchItem, updateStartPage, updateTotalPage } from './store/action'

function App () {

  // componentDidMount(){
  //   const {searchItem,startPage,totalPage} = this.props
  //   this.props.fetchPhotos(searchItem,startPage,totalPage)
  // }
  const photos = useSelector(state =>state.fetchReducer.photos)
  const searchItem = useSelector(state => state.searchReducer.searchItem)
  const startPage = useSelector(state => state.searchReducer.startPage)
  const pageSize = useSelector(state => state.searchReducer.totalPage)
  console.log("searchitme", searchItem)
  const dispatch = useDispatch()


  useEffect((searchItem) => {
    // dispatch(updateSearchItem())
    console.log("searchItem in useEffect",searchItem)
    dispatch(fetchPhotos(searchItem))
  }, [])

    // handleSearchItem = (item) => {
    //   console.log(item)
    //   this.props.updateSearchItem(item)
    //   this.props.fetchPhotos(item)
    // }
  
    // const handleSearchItem = (searchItem,page,pageSize) => {
    //   console.log("searchItem in app handlesearchItem function",searchItem)
    //   dispatch(updateSearchItem(searchItem,page,pageSize))
    //   dispatch(fetchPhotos(searchItem))
    //   // this.props.fetchPhotos(item)
    // }


    // const {photos, searchItem} = this.props

  // render(){
  //     const {photos, searchItem} = this.props
  //     console.log(photos?.results)
  //     console.log(photos)
  //     console.log(photos && photos.results[0].urls.full)
  //     console.log(searchItem)

    return (
      <div className="App">
        <h1>Unsplash Photo Search</h1>
        {/* <SearchBar searchItem={searchItem} handleSearchItem={handleSearchItem}/>
        <SearchCount />
        <br/>
        <SearchResult photos={photos?.results}/> */}
        <SearchBar searchItem={searchItem}/>
        <SearchCount totalPage={photos?.total}/>
        <br/>
        <SearchResult photos={photos?.results}/>
      </div>
    );
  // }
}

// const mapStateToProps = state => {
//   return {
//     searchItem: state.searchReducer.searchItem,
//     photos: state.fetchReducer.photos,
//     startPage: state.searchReducer.startPage,
//     totalPage: state.searchReducer.totalPage
//   }
// }

// const mapDispatchToProps = {
//     fetchPhotos: fetchPhotos,
//     updateSearchItem: updateSearchItem,
//     updateStartPage: updateStartPage,
//     updateTotalPage: updateTotalPage
// }


// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);
export default App