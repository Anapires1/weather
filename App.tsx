import {StatusBar, Text, View} from 'react-native';

import {SearchCity} from './src/pages/searchCity/SearchCity';
// In App.js in a new project
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/pages/home/Home';
import {Provider} from 'react-redux';
import {store} from './src/store/redux/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SearchCity" component={SearchCity} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
