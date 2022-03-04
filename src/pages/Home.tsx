import React from 'react';
import { CardAdd } from '../components/CardAdd';
import { CardExtra } from '../components/CardExtra';
import { Card, CardInformation } from '../components/CardInformation';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { TextBold, TextHome, ViewHome, ViewText, CardsContainer } from './Home.styles';

export function Home() {
  return (
    <>
    <ViewHome>
      <Header />
      <Input />
      {/* <ViewText>
        <TextBold>
          Parece que você ainda não {'\n'} adicionou uma cidade
        </TextBold>
        <TextHome>
          Tente buscar uma cidade 
        </TextHome>
      </ViewText> */}


        <CardsContainer>
          <CardInformation />
          <CardAdd />
          <CardExtra />
        </CardsContainer>


    </ViewHome>
    </>
  );
}
