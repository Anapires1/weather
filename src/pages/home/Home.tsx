import React, {useState} from 'react';
import {CardAdd} from '../../components/card/CardAdd';
import {CardExtra} from '../../components/card/CardExtra';
import {Card, CardInformation} from '../../components/card/CardInformation';
import {Header} from '../../components/header/Header';
import {GooglePlacesInput, Input} from '../../components/input/Input';
import {
  TextBold,
  TextHome,
  ViewHome,
  ViewText,
  CardsContainer,
} from '../searchCity/SearchCity.styles';

interface HomeProps {}

export function Home() {
  const [cities, setCities] = useState<[]>([]);

  return (
    <>
      <ViewHome>
        {/* <Header />
        <GooglePlacesInput /> */}
        <ViewText>
          <TextBold>
            Parece que você ainda não {'\n'} adicionou uma cidade
          </TextBold>
          <TextHome>Tente buscar uma cidade</TextHome>
        </ViewText>

        {/* {city.map(c => (
        <ContainerAdd>
          <Title> {c?.structured_formatting?.main_text} </Title>
          <SubTitle> {c?.structured_formatting?.secondary_text} </SubTitle>
          <Add>
            <TextAdd>ADICIONAR</TextAdd>
          </Add>
        </ContainerAdd>
      ))} */}

        {/* <CardsContainer>
          <CardInformation />
          <CardAdd />
          <CardExtra />
        </CardsContainer> */}
      </ViewHome>
    </>
  );
}
