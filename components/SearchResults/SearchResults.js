import React, {Component} from 'react';
import {Linking, Text, TouchableOpacity, View , Image} from 'react-native';

import {connect} from 'react-redux';

const styles = require('./SearchResultsStyles');

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.searchResultsContainer}>
        {this.props.Search.map((Search, key) => (
          <TouchableOpacity 
            key={key}
            onPress={() => { Linking.openURL(Search.Poster) }}
            style={styles.resultLink}
          >
            <Text style={styles.Title} >{Search.Title}</Text>
            <Text>{Search.Year}</Text>
            <Image
          style={ styles.Image }
          resizeMode='contain'
          source={{uri:(Search.Poster)}}
        />
          </TouchableOpacity>
          ))}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    Search: state.Search
  };
}

export default connect(mapStateToProps, null)(SearchResults);