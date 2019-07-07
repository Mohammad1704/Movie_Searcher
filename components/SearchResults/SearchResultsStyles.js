import styled from 'styled-components';
const React = require('react-native');
const { Dimensions, StyleSheet } = React;
const deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  searchResultsContainer: {
    backgroundColor: 'white', // change color here 
    marginTop: 0,
    paddingTop:0,
    width: deviceWidth - 20,
    alignItems: 'center',
    flex: 9
  },
  resultLink: {
    display: 'flex',
    backgroundColor: '#F1F3F7', // change color here 
    borderRadius: 5,
    height: 150,     // change size here
    width: deviceWidth - 20,
    marginVertical: 5,
    padding: 5,
    alignItems: 'flex-start',
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
