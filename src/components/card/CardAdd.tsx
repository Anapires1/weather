import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {
  ContainerAdd,
  Title,
  SubTitle,
  ViewCard,
  Add,
  TextAdd,
} from '../card/Card.styles';

import {SearchCityProps} from '../../pages/searchCity/SearchCity';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setCities} from '../../store/redux/citiesSlice';
interface CardAddProps {
  city: SearchCityProps;
}

export function CardAdd({city}: CardAddProps) {
  const dispatch = useDispatch();

  const navigation = useNavigation();

  function handleAddNewCity() {
    dispatch(setCities(city));
    console.log('oi', city);
    navigation.navigate('Home');
    // weather();
  }

  // function weather() {
  //   api(
  //     '/weather?lat={lat}&lon={lon}&appid={5e3a728896ac5d08c92a18e55cb13c5c}',
  //   );
  // }

  return (
    <>
      <ContainerAdd>
        <Title> {city?.structured_formatting?.main_text} </Title>
        <SubTitle> {city?.structured_formatting?.secondary_text} </SubTitle>
        <Add onPress={handleAddNewCity}>
          <TextAdd>ADICIONAR</TextAdd>
        </Add>
      </ContainerAdd>
    </>
  );
}
