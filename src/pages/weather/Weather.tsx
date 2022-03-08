import React, {useEffect, useState} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {CardWeather} from '../../components/card/CardWeather';
import {
  Button,
  ButtonText,
  CardsContainerHome,
  CardsScroll,
  ViewHome,
} from '../home/Home.styles';
import {useNavigation} from '@react-navigation/native';
import {setWeather} from '../../store/redux/citiesSlice';
import {Alert} from 'react-native';
import {api} from '../../service/api';
import {SearchCityProps} from '../searchCity/SearchCity';
import {ParamListBase} from '@react-navigation/native';
import {Header} from '../../components/header/Header';
import {StoreStateProps} from '../../store/redux/store';
import {LottieLoading} from './weather.style';

interface WeatherProps {
  id: number;
  date_time: number;
  icon: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  description: string;
}

interface Params extends ParamListBase {
  params?: {
    city?: SearchCityProps;
  };
}

export function Weather() {
  const {cities} = useSelector<TypedUseSelectorHook<StoreStateProps>>(
    state => state.cities,
  );
  const [loadingWeather, setLoadingWeather] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    cities.forEach(city => {
      (async (): Promise<void> => {
        try {
          const results = await api.get<WeatherProps>('/onecall', {
            params: {
              lon: city.location.lng,
              lat: city.location.lat,
              exclude: 'minutely,hourly',
            },
          });
          dispatch(
            setWeather({
              id: city.place_id,
              currentLocation: results.data.current,
              daily: results.data.daily.map(weather => ({
                id: weather.dt,
                date_time: weather.dt,
                temp: Math.ceil(weather.temp.day),
                temp_min: Math.ceil(weather.temp.min),
                temp_max: Math.ceil(weather.temp.max),
                icon: weather.weather[0].icon,
                description: weather.weather[0].description,
              })),
            }),
          );
        } catch {
          Alert.alert('Erro ao solicitar dados da api', '', [
            {
              text: 'Voltar para cidades',
              onPress: () => navigation.navigate('SearchCity'),
            },
          ]);
        } finally {
          setLoadingWeather(false);
        }
      })();
    });
  }, []);

  return (
    <ViewHome>
      <Header />
      {loadingWeather ? (
        <LottieLoading />
      ) : (
        <>
          {cities.length === 0 && navigation.navigate('Home')}
          <CardsScroll>
            <CardsContainerHome>
              <CardWeather />
            </CardsContainerHome>
          </CardsScroll>
          <Button onPress={() => navigation.navigate('SearchCity')}>
            <ButtonText>+</ButtonText>
          </Button>
        </>
      )}
    </ViewHome>
  );
}
