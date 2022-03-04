import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { 
  ContainerAdd,
  Title,
  SubTitle,
  ViewCard,
  Add,
  TextAdd,
 } from './Card.styles'

export function CardAdd() {
  return (
    <ContainerAdd>
      <Title> Rio de Janeiro </Title>
      <SubTitle> Brasil </SubTitle>
      <Add>  
        <TextAdd>ADICIONAR</TextAdd>
      </Add>
    </ContainerAdd>
  )
}