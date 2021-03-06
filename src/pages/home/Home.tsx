import React from 'react';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {Header} from '../../components/header/Header';
import {TextBold, TextHome} from '../searchCity/SearchCity.styles';
import {Button, ButtonText, ViewHome, ViewText} from './Home.styles';
import {useNavigation} from '@react-navigation/native';
import {CitiesStateProps} from '../../store/redux/citiesSlice';

export function Home() {
  const {cities} = useSelector<TypedUseSelectorHook<CitiesStateProps>>(
    state => state.cities,
  );

  const navigation = useNavigation();

  return (
    <ViewHome>
      <Header />
      <ViewText>
        <TextBold>
          Parece que você ainda não {'\n'} adicionou uma cidade
        </TextBold>
        <TextHome>Aperte o botão abaixo para {'\n'} buscar uma cidade</TextHome>
      </ViewText>
      <Button onPress={() => navigation.navigate('SearchCity')}>
        <ButtonText>+</ButtonText>
      </Button>
    </ViewHome>
  );
}
