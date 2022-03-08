import React from 'react';

import 'intl';

import 'intl/locale-data/jsonp/pt-BR';

import {
  Title,
  Grau,
  SubTitle,
  Forecast,
  Variation,
  ViewCard,
  ViewText,
  ContainerInfo,
} from './Card.styles';
import {useSelector} from 'react-redux';
import {StoreStateProps} from '../../store/redux/store';

export function CardExtra() {
  const {cities} = useSelector<TypedUseSelectorHook<StoreStateProps>>(
    state => state.cities,
  );
  function weekDayFormat(index: number) {
    let weekDay = new Date();
    weekDay = weekDay.setDate(weekDay.getDate() + index);
    weekDay = new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'full',
      timeStyle: 'long',
      weekday: 'long',
    }).format(weekDay);
    return weekDay;
  }
  function dateFormat(index: number) {
    let weekDay = new Date();
    weekDay = weekDay.setDate(weekDay.getDate() + index);
    weekDay = new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'full',
      timeStyle: 'long',
    }).format(weekDay);
    return weekDay;
  }

  return (
    <>
      {cities.map(city =>
        city?.daily.map((day, index) => {
          return (
            <ContainerInfo>
              <ViewCard>
                <ViewText>
                  <Title>{weekDayFormat(index)} </Title>
                  <SubTitle> {dateFormat(index)} </SubTitle>
                </ViewText>
                <Grau> {day.temp}º </Grau>
              </ViewCard>

              <ViewCard>
                <ViewText>
                  <Forecast> {day.description} </Forecast>
                  <Variation>
                    {' '}
                    {day.temp_max}º - {day.temp_min}º{' '}
                  </Variation>
                </ViewText>
              </ViewCard>
            </ContainerInfo>
          );
        }),
      )}
    </>
  );
}
