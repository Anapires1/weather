import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {
  CardsContainerInformation,
  TextBold,
  ViewInformation,
  ViewText,
} from './information.style';
import {CardExtra} from '../../components/card/CardExtra';
import {Header} from '../../components/header/HeaderSearch';

export function Information() {
  return (
    <>
      <ViewInformation>
        <Header />
        <ViewText>
          <TextBold> Previsão para os próximos 5 dias: </TextBold>
        </ViewText>
        <CardsContainerInformation>
          <CardExtra />
        </CardsContainerInformation>
      </ViewInformation>
    </>
  );
}
