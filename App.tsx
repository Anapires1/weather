import React from 'react';
import {StatusBar, Text} from 'react-native';

import {SearchCity} from './src/pages/searchCity/SearchCity';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <SearchCity />
    </>
  );
}
