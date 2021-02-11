import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComicList } from '../actions/marvelAPIActions';

import StackGrid from 'react-stack-grid';

class ComicList extends Component {

  componentWillMount() {
    this.props.fetchComicList();
  }
  render() {
      // Adding individual entry/result
      const comicList = this.props.comics.map(result => (
              <div key={result.id}>
                <img src={result.thumbnail.path + '.jpg'}/>
                {result.title}
              </div>
      ))
     
    return (
      <div>
        <h1>Marvel Comic List</h1>
        
        {/* Adding into Stack Grid*/}
        <StackGrid columnWidth={200} monitorImagesLoaded={true}>
          {comicList}
        </StackGrid>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  comics: state.comics.items
});

export default connect(mapStateToProps, {fetchComicList})(ComicList);