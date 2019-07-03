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
      // HERE the Problem (you dont know the JESON tree/path)
      <View style={styles.searchResultsContainer}>     
        {this.props.results.map((Search, key) => (
          <TouchableOpacity 
            onPress={() => {Linking.openURL(Search.formattedUrl) }}
          >
            <Text key={Search}>{Title}</Text>
          </TouchableOpacity>
         ))}
       </View>
    )
  }}
  function mapStateToProps(state) {
    return {
      results: state.results
    };
  }
  export default connect(mapStateToProps, null)(SearchResults);