import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAD-aCuHEXYlv9NvOYoHI1isH8qXZkDmP8",
      authDomain: "manager-17879.firebaseapp.com",
      databaseURL: "https://manager-17879.firebaseio.com",
      projectId: "manager-17879",
      storageBucket: "manager-17879.appspot.com",
      messagingSenderId: "226128650858"
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <View>
          <Text>Welcome to React Native!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;