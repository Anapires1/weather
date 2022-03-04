import { Text, View } from 'react-native'
import React, { Component } from 'react'
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
 } from './Card.styles'

export function CardInformation() {
  return (
    <Container>

      <ViewCard>
        <ViewText>
          <Title> Rio de Janeiro </Title>
          <SubTitle> Brasil </SubTitle>
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
  )
}