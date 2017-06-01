import React from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText="Albums"></Header>
      <AlbumList />
    </View>
  );
};

// render component
AppRegistry.registerComponent('AlbumsApp', () => App);
