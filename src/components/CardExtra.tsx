import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { 
  Container,
  Title,
  Grau,
  SubTitle,
  Forecast,
  Variation,
  ViewCard,
  ViewText,
 } from './Card.styles'

export function CardExtra() {
  return (
    <Container>

      <ViewCard>
        <ViewText>
          <Title> Hoje </Title>
          <SubTitle> 5 de julho </SubTitle>
        </ViewText>
        <Grau> 18º </Grau>
      </ViewCard>

      <ViewCard>
        <ViewText>
          <Forecast> Chuva fraca </Forecast>
          <Variation> 14º - 28º </Variation>
        </ViewText>
      </ViewCard>

    </Container>
  )
}