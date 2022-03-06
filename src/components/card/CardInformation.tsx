import {AsyncStorage, Text, View} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import {
  Container,
  Title,
  Grau,
  SubTitle,
  Forecast,
  Variation,
  Favorite,
  ViewCard,
  ViewText,
  Clear,
  TextAdd,
  TextClear,
} from './Card.styles';
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  CitiesStateProps,
  clearCity,
  setCities,
} from '../../store/redux/citiesSlice';

export function CardInformation() {
  const dispatch = useDispatch();
  const {cities} = useSelector<TypedUseSelectorHook<CitiesStateProps>>(
    state => state.cities,
  );
  const navigation = useNavigation();
  // const [cidades, setCidades] = useState<CitiesStateProps>(async () => {
  //   const saveCities = await AsyncStorage.getItem('@cities');

  //   if (saveCities) {
  //     return JSON.parse(saveCities);
  //   }

  //   return cities;
  // });

  // useEffect(() => {
  //   async function saveCities() {
  //     await AsyncStorage.setItem('@cities', JSON.stringify(cities));
  //   }
  //   saveCities();
  // }, [cities]);

  function handleClearCity(id) {
    console.log('koookok');
    dispatch(clearCity(id));
  }

  return (
    <>
      {cities.map(city => (
        <Container onPress={() => navigation.navigate('Information')}>
          <ViewCard>
            <ViewText>
              <Title> {city?.structured_formatting?.main_text} </Title>
              <SubTitle>
                {' '}
                {city?.structured_formatting?.secondary_text}{' '}
              </SubTitle>
            </ViewText>
            <Grau> 18º </Grau>
          </ViewCard>

          <ViewCard>
            <ViewText>
              <Forecast> Chuva fraca </Forecast>
              <Variation> 14º - 28º </Variation>
            </ViewText>
            <Clear onPress={() => handleClearCity(city?.place_id)}>
              <TextClear>🗑️</TextClear>
            </Clear>
          </ViewCard>
        </Container>
      ))}
    </>
  );
}
