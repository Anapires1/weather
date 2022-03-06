import {Text, View} from 'react-native';
import React, {Component} from 'react';
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
} from './Card.styles';
import {useSelector} from 'react-redux';

export function CardInformation() {
  const {cities} = useSelector(state => state.cities);

  return (
    <>
      {cities.map(city => (
        <Container>
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
            <Favorite> 💖</Favorite>
          </ViewCard>
        </Container>
      ))}
    </>
  );
}
