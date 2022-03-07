import {Text, View} from 'react-native';
import React, {Component} from 'react';

import 'intl';

import 'intl/locale-data/jsonp/pt-BR';

import {
  Container,
  Title,
  Grau,
  SubTitle,
  Forecast,
  Variation,
  ViewCard,
  ViewText,
} from './Card.styles';
import {useDispatch, useSelector} from 'react-redux';
import {StoreStateProps} from '../../store/redux/store';
import {useEffect} from 'react';

export function CardExtra() {
  const dispatch = useDispatch();
  const {cities, currentWeather} = useSelector<
    TypedUseSelectorHook<StoreStateProps>
  >(state => state.cities);

  useEffect(() => {
    console.log('cidades: UUUUUUUUUUUUU: ', cities);
  }, [cities]);

  console.log('teste card extra', cities.daily);

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
          console.log('dayli', day);

          return (
            <Container>
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
            </Container>
          );
        }),
      )}
    </>
  );
}

// {cities.map(city => {
//   // city?.daily?.map(day => {
//   //   return <Grau> Aqui{day?.temp}aa </Grau>;
//   // });
//   return (
//     <Container>
//       <ViewCard>
//         <ViewText>
//           <Title> Hoje </Title>
//           <SubTitle> 5 de julho </SubTitle>
//         </ViewText>
//         <Grau> Aqui{city?.daily[0]?.temp} </Grau>
//       </ViewCard>

//       <ViewCard>
//         <ViewText>
//           {/* <Forecast> aaa{city?.currentLocation?.lat} </Forecast> */}
//           <Variation> 14º - 28º </Variation>
//         </ViewText>
//       </ViewCard>
//     </Container>
//   );
// })}
