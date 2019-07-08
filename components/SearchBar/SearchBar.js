import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';

import { Icon,Button, ThemeProvider } from 'react-native-elements';
  

import {API_KEY} from '../../constants/api.js';

import {connect} from 'react-redux';
import {searchResults} from "../../actions";
import axios from 'axios';

const styles = require('./SearchBarStyles');
const cx = '009069714977778037875:eoqhnbkf2si';
const apiURL = 'http://www.omdbapi.com/?';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  searchOnOmdb = async () => {
    let URL = apiURL + 'apikey=' + API_KEY + '&s=' + this.state.searchTerm;
    const res = await axios.get(URL);
    console.log(res);
    this.props.searchResults(res.data.Search);
  }

  render() {
    return (
    
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder='Enter the movie‘s name '
          style={styles.textInputSearch}
          underlineColorAndroid={'transparent'}
          onChangeText={(searchTerm) => this.setState({ searchTerm })}
          value={this.state.searchTerm}
        />
        <TouchableOpacity style={styles.textSearchButton} onPress={() => this.searchOnOmdb()}>
      <Icon
  name='search'
  color='#F1F3F7'
/>

        </TouchableOpacity>
        
      </View>
      
    )
  }
}

export default connect(null, {searchResults})(SearchBar);