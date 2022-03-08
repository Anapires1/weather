import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {LottieCloud, TextHeader, ViewHeader} from './headerSearch.style';
import {ButtonHeader} from './headerSearch.style';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {StoreStateProps} from '../../store/redux/store';
import {useEffect} from 'react';

export function Header() {
  const navigation = useNavigation();
  const {cities, currentWeather} = useSelector<
    TypedUseSelectorHook<StoreStateProps>
  >(state => state.cities);

  return (
    <>
      <ViewHeader>
        <LottieCloud />
        <ButtonHeader onPress={() => navigation.navigate('Weather')}>
          <TextHeader> X </TextHeader>
        </ButtonHeader>
      </ViewHeader>
    </>
  );
}
