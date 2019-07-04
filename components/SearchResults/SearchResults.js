import React, {Component} from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';

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
            <Text>{Search.Title}</Text>
            <Text>{Search.Title}</Text>
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