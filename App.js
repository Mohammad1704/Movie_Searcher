import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import styled from 'styled-components';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => console.log('store', store.getState()));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.Header}>
          <SearchBar/>
          <SearchResults/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  Header: {
    flex: 1,   //tag flex_problem
    // paddingTop :40,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});