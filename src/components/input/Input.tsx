import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
// import {CardAdd} from '../card/CardAdd';

import {Search, TextInput, TouchableOpacity, ViewInput} from './Input.styles';

interface GooglePlacesInputProps {
  handleSelect: (data) => void;
}

export function GooglePlacesInput({handleSelect}: GooglePlacesInputProps) {
  return (
    <>
      <GooglePlacesAutocomplete
        styles={{
          textInput: {
            fontSize: 22,
            flex: 1,
            color: '#B2B2B2',
            borderRadius: 8,
            marginTop: -18,
            marginLeft: 30,
            marginRight: 30,
          },
        }}
        placeholder="Buscar cidade..."
        onPress={(data, details = null) => {
          handleSelect(data);
        }}
        query={{
          key: 'AIzaSyATpNVxrTmLmxLaMwyNIb4NGTKcoDHJwfk',
          language: 'pt-br',
          types: ['locality', 'political', 'geocode'],
        }}
      />
      {/* <ViewInput>
        <TextInput
          placeholder="Buscar cidade..."
          placeholderTextColor="#B2B2B2"
        />
        <TouchableOpacity>
          <Search />
        </TouchableOpacity>
      </ViewInput> */}
    </>
  );
}