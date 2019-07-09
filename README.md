
# Movie_Searcher
using OMDB API
react native app with redux and react-native-elements package for icons
## Demo
https://www.youtube.com/watch?v=HBE9ck_KDZ0

### how to use source code
this app use API from `http://www.omdbapi.com/` with API key so you have to regiest to get your own key and use it in the app.
1. after you Fork & clone.
2. open the fulder and create `api.js` file in `constants/api.js`
3. past this code in `api.js` file.

```
export const API_KEY='<YOUR_API_KEY>'; 

```
now your api key connected to the `URL` in `searchOnOmdb` methode ( inside `SearchBar.js` file).
