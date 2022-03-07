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
  ViewContainer,
  IconTrash,
} from './Card.styles';
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  CitiesStateProps,
  clearCity,
  setCities,
} from '../../store/redux/citiesSlice';
import {StoreStateProps} from '../../store/redux/store';
import {CardExtra} from './CardExtra';

export function CardWeather() {
  const dispatch = useDispatch();
  const {cities, currentWeather} = useSelector<
    TypedUseSelectorHook<StoreStateProps>
  >(state => state.cities);
  const navigation = useNavigation();

  function handleClearCity(id) {
    dispatch(clearCity(id));
  }

  return (
    <>
      {cities.map(city => (
        <Container onPress={() => navigation.navigate('Information')}>
          <ViewCard>
            <ViewContainer>
              <ViewText>
                <Title>{city?.structured_formatting?.main_text} </Title>
                <SubTitle>
                  {' '}
                  {city?.structured_formatting?.secondary_text}{' '}
                </SubTitle>
              </ViewText>
              <Grau> {city?.currentLocation?.temp}º </Grau>
            </ViewContainer>
          </ViewCard>

          <ViewCard>
            <ViewText>
              <Forecast>
                {' '}
                {city?.currentLocation?.weather[0].description}{' '}
              </Forecast>
              <Variation>
                {' '}
                Humidade: {city?.currentLocation?.humidity}{' '}
              </Variation>
            </ViewText>
            <Clear onPress={() => handleClearCity(city?.place_id)}>
              <IconTrash />
            </Clear>
          </ViewCard>
        </Container>
      ))}
    </>
  );
}
