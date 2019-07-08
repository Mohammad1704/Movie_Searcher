const React = require('react-native');
const { Dimensions, StyleSheet } = React;
const deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  searchResultsContainer: {
    justifyContent: 'flex-start',
    flexDirection:'column',
    flexWrap: 'wrap',
    backgroundColor: 'white', // change color here 
    marginTop: 0,
    paddingTop:0,
    width: deviceWidth - 20,
    flex: 9
  },
  resultLink: {
    flexDirection:'column',
    flexWrap: 'wrap',
    backgroundColor: '#F1F3F7', // change color here 
    borderRadius: 5,
    height: 150,     // change size here
    width: deviceWidth - 20,
    marginVertical: 5,
    padding: 0,
  },
  Title:{
    padding:5,
    alignSelf:'center',
    maxWidth:255,
fontSize:20,
color:'black',
  },
  Year:{
    padding:5,
    color:'gray'
  },
  Poster:{
    borderRadius:5,
    alignSelf: 'stretch', // its useful if u didn't specify the height and width
    width: 100,
    height: 150
  }
})
