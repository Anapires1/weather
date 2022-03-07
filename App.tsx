import {StatusBar, Text, View} from 'react-native';

import {SearchCity} from './src/pages/searchCity/SearchCity';
// In App.js in a new project
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/pages/home/Home';
import {Provider} from 'react-redux';
import {store} from './src/store/redux/store';
import {Information} from './src/pages/information/Information';
import {Weather} from './src/pages/weather/Weather';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/styles/theme';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ThemeProvider theme={theme}>
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
            <Stack.Screen name="Information" component={Information} />
            <Stack.Screen name="Weather" component={Weather} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
