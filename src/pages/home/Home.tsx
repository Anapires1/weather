import React, {useEffect, useState} from 'react';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {
  Add,
  ContainerAdd,
  SubTitle,
  TextAdd,
  Title,
} from '../../components/card/Card.styles';
import {CardAdd} from '../../components/card/CardAdd';
import {CardExtra} from '../../components/card/CardExtra';
import {Card, CardInformation} from '../../components/card/CardInformation';
import {Header} from '../../components/header/Header';
import {GooglePlacesInput, Input} from '../../components/input/Input';
import {
  TextBold,
  TextHome,
  // ViewHome,
  // ViewText,
  CardsContainer,
} from '../searchCity/SearchCity.styles';
import {
  Button,
  ButtonText,
  CardsContainerHome,
  CardsScroll,
  ViewHome,
  ViewText,
} from './Home.styles';
import {useNavigation} from '@react-navigation/native';
import {CitiesStateProps} from '../../store/redux/citiesSlice';
import {AsyncStorage} from 'react-native';

export function Home() {
  const {cities} = useSelector<TypedUseSelectorHook<CitiesStateProps>>(
    state => state.cities,
  );

  const navigation = useNavigation();

  return (
    <ViewHome>
      <Header />
      {cities.length === 0 ? (
        <>
          <ViewText>
            <TextBold>
              Parece que você ainda não {'\n'} adicionou uma cidade
            </TextBold>
            <TextHome>
              Aperte o botão abaixo para {'\n'} buscar uma cidade
            </TextHome>
          </ViewText>
          <Button onPress={() => navigation.navigate('SearchCity')}>
            <ButtonText>+</ButtonText>
          </Button>
        </>
      ) : (
        <>
          <CardsScroll>
            <CardsContainerHome>
              <CardInformation />
            </CardsContainerHome>
          </CardsScroll>
          <Button onPress={() => navigation.navigate('SearchCity')}>
            <ButtonText>+</ButtonText>
          </Button>
        </>
      )}
    </ViewHome>
  );
}

{
  /* <CardsContainer>
<CardInformation />
<CardAdd />
<CardExtra />
</CardsContainer> */
}
