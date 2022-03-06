import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {ButtonText} from '../../pages/home/Home.styles';
import {LottieCloud, TextHeader, ViewHeader} from './headerSearch.style';
import {ButtonHeader} from './headerSearch.style';

export function Header() {
  const navigation = useNavigation();
  return (
    <>
      <ViewHeader>
        <LottieCloud />
        <ButtonHeader onPress={() => navigation.navigate('Home')}>
          <TextHeader> X </TextHeader>
        </ButtonHeader>
      </ViewHeader>
    </>
  );
}
