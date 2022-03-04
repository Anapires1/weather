import React, {useState} from 'react';
import {CardAdd} from '../../components/card/CardAdd';
import {CardExtra} from '../../components/card/CardExtra';
import {Card, CardInformation} from '../../components/card/CardInformation';
import {Header} from '../../components/header/Header';
import {GooglePlacesInput, Input} from '../../components/input/Input';
import Geocoder from 'react-native-geocoding';
import {
  TextBold,
  TextHome,
  ViewHome,
  ViewText,
  CardsContainer,
} from './SearchCity.styles';

export interface SearchCityProps {
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
}

export function SearchCity() {
  const [city, setCity] = useState<SearchCityProps>({} as SearchCityProps);

  function handleNewCity(data: SearchCityProps) {
    setCity(data);
    console.log(data);
    handleLatLong(data);
  }

  function handleLatLong() {
    Geocoder.init('AIzaSyATpNVxrTmLmxLaMwyNIb4NGTKcoDHJwfk');

    Geocoder.from('Colosseum')
      .then(json => {
        var location = json.results[0].geometry.location;
        console.log('location pf', location);
      })
      .catch(error => console.warn(error));
  }

  return (
    <>
      <ViewHome>
        <Header />
        <GooglePlacesInput handleSelect={handleNewCity} />
        {Object.keys(city).length === 0 ? (
          <ViewText>
            <TextBold>
              Parece que você ainda não {'\n'} adicionou uma cidade
            </TextBold>
            <TextHome>Tente buscar uma cidade</TextHome>
          </ViewText>
        ) : (
          <CardsContainer>
            <CardAdd city={city} />
          </CardsContainer>
        )}
        {/* {!!Object.keys(city).lenght === 0 && <CardAdd city={city} />} */}
        {/* <CardsContainer>
          <CardInformation />
          <CardAdd />
          <CardExtra />
        </CardsContainer> */}
      </ViewHome>
    </>
  );
}
