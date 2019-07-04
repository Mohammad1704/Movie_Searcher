import styled from 'styled-components';
const React = require('react-native');
const { Dimensions, StyleSheet } = React;
const deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  searchResultsContainer: {
    marginTop: 41,
    paddingTop:41,
    width: deviceWidth - 20,
    alignItems: 'center',
    flex: 9
  },
  resultLink: {
    display: 'flex',
    backgroundColor: '#ddd',
    borderRadius: 5,
    height: 40,
    width: deviceWidth - 10,
    marginVertical: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Title:{
fontSize:20,
color:'black',
  },
  Image:{
    width: (deviceWidth + 30) / 4,
    height: (deviceWidth + 30) / 2
  }
  // poster:{
  //   width: 20 ,
  //   alignItems: 'center',
  //   // flex: 9
  // }
})
