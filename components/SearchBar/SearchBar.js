import React, {Component} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
// import {FontAwesome} from '@expo/vector-icons';
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
    // fetch(URL, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   }
    // }).then((response) => {
    //   console.log('hello');
    //   response.json().then((data) => {
    //     this.props.searchResults(data.items.title);
    //     console.log(data);
    //     console.log(data.items.title);
    //   })
    // }).catch((error) => console.log(error));

    const res = await axios.get(URL);
    console.log('hello');
    console.log(res);
    this.props.searchResults(res.data.Search);
  }

  render() {
    return (

      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder='Enter your search terms'
          style={styles.textInputSearch}
          underlineColorAndroid={'transparent'}
          onChangeText={(searchTerm) => this.setState({ searchTerm })}
          value={this.state.searchTerm}
        />
        <TouchableOpacity
          style={styles.textSearchButton}
          onPress={() => this.searchOnOmdb()}
        >
          {/* <FontAwesome name="search" size={16} color="#000"/> */}
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(null, {searchResults})(SearchBar);