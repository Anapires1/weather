import React, {useState} from 'react';
import {CardAdd} from '../../components/card/CardAdd';
import {Header} from '../../components/header/HeaderSearch';
import {GooglePlacesInput} from '../../components/input/Input';
import Geocoder from 'react-native-geocoding';
import {
  TextBold,
  ViewText,
  CardsContainer,
  LottieSearch,
  ViewSearch,
} from './SearchCity.styles';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export interface SearchCityProps {
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
  place_id: string;
  location: {
    lat: string;
    lng: string;
  };
  current: {
    Weather: {
      temp: string;
      weather: [
        {
          description: string;
        },
      ];
    };
  };
  daily: [
    {
      date_time: string;
      description: string;
      icon: string;
      id: string;
      temp: string;
      temp_max: string;
      temp_min: string;
    },
  ];
}

export function SearchCity() {
  const [city, setCity] = useState<SearchCityProps>({} as SearchCityProps);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState('');

  function handleNewCity(data: SearchCityProps) {
    handleLatLong(data);
  }

  function handleLatLong(data: SearchCityProps) {
    setLoading(true);
    Geocoder.init('AIzaSyATpNVxrTmLmxLaMwyNIb4NGTKcoDHJwfk');

    Geocoder.from(data.structured_formatting.main_text)
      .then(json => {
        setCity({...data, location: json.results[0].geometry.location});
      })
      .catch(error => console.warn(error))
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <ViewSearch>
        <Header />
        <GooglePlacesInput handleSelect={handleNewCity} />
        {loading ? (
          <LottieSearch />
        ) : Object.keys(city).length === 0 ? (
          <>
            <ViewText>
              <TextBold>Busque uma cidade</TextBold>
            </ViewText>
          </>
        ) : (
          <CardsContainer>
            <CardAdd city={city} location={location} />
          </CardsContainer>
        )}
      </ViewSearch>
    </>
  );
}
