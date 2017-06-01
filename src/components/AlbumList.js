import React from 'react';
import axios from 'axios';
import {
  View,
  Text,
  ScrollView
} from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    const self = this;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(result => {
           this.setState({ albums: result.data })
         })
         .catch(err => console.log(err));
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
