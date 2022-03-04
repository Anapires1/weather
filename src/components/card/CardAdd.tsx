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

interface CardAddProps {
  city: SearchCityProps;
}

export function CardAdd({city}: CardAddProps) {
  return (
    <>
      <ContainerAdd>
        <Title> {city?.structured_formatting?.main_text} </Title>
        <SubTitle> {city?.structured_formatting?.secondary_text} </SubTitle>
        <Add
        // onPress={}
        >
          <TextAdd>ADICIONAR</TextAdd>
        </Add>
      </ContainerAdd>
    </>
  );
}
