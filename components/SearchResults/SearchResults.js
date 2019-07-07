import React, {Component} from 'react';
import {Linking, Text, TouchableOpacity, View , Image,ScrollView} from 'react-native';

import {connect} from 'react-redux';

const styles = require('./SearchResultsStyles');

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      
      <View style={styles.searchResultsContainer} 
      //  resizeMode="contain"
      >
        <ScrollView >
        {this.props.Search.map((Search, key) => (
          <TouchableOpacity 
            key={key}
            onPress={() => { Linking.openURL(Search.Poster) }}
            style={styles.resultLink}
          >
            <Text style={styles.Title} >{Search.Title}</Text>
            <Text>{Search.Year}</Text>
            <Image
          style={{
    flex: 1,
    alignSelf: 'stretch',
    width: 150,
    height: undefined
  }}
          // resizeMode='contain'   // this resizeMode have no visul effect
          source={{uri:(Search.Poster)}}
        />
          </TouchableOpacity>
          ))}
          </ScrollView>
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