import React, {useState} from 'react';
import {CardAdd} from '../../components/card/CardAdd';
import {CardExtra} from '../../components/card/CardExtra';
import {Card, CardInformation} from '../../components/card/CardInformation';
import {Header} from '../../components/header/HeaderSearch';
import {GooglePlacesInput, Input} from '../../components/input/Input';
import Geocoder from 'react-native-geocoding';
import {
  TextBold,
  TextHome,
  ViewHome,
  ViewText,
  CardsContainer,
  LottieSearch,
  ViewSearch,
} from './SearchCity.styles';
import {useDispatch, useSelector} from 'react-redux';
import {CitiesStateProps, setCities} from '../../store/redux/citiesSlice';
import {useNavigation} from '@react-navigation/native';

export interface SearchCityProps {
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
  place_id: string;
}

export function SearchCity() {
  const [city, setCity] = useState<SearchCityProps>({} as SearchCityProps);
  const dispatch = useDispatch();
  const {cities} = useSelector((state: CitiesStateProps) => state.cities);

  const navigation = useNavigation();

  function handleNewCity(data: SearchCityProps) {
    setCity(data);
    // console.log(data);
    handleLatLong(data);
    // navigation.navigate('Home');
    // dispatch(setCities(data));
  }

  function handleLatLong(data: SearchCityProps) {
    Geocoder.init('AIzaSyATpNVxrTmLmxLaMwyNIb4NGTKcoDHJwfk');

    Geocoder.from(data.structured_formatting.main_text)
      .then(json => {
        var location = json.results[0].geometry.location;
        console.log('location pf', location);
      })
      .catch(error => console.warn(error));
  }

  return (
    <>
      <ViewSearch>
        <Header />
        <GooglePlacesInput handleSelect={handleNewCity} />
        {Object.keys(city).length === 0 ? (
          <>
            {/* <LottieSearch /> */}
            <ViewText>
              <TextBold>Busque uma cidade</TextBold>
            </ViewText>
          </>
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
      </ViewSearch>
    </>
  );
}
