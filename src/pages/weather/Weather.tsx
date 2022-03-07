import React, {useEffect, useState} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {
  Add,
  ContainerAdd,
  SubTitle,
  TextAdd,
  Title,
} from '../../components/card/Card.styles';
import {CardAdd} from '../../components/card/CardAdd';
import {CardExtra} from '../../components/card/CardExtra';
import {CardWeather} from '../../components/card/CardWeather';
import {GooglePlacesInput, Input} from '../../components/input/Input';
import {
  TextBold,
  TextHome,
  // ViewHome,
  // ViewText,
  CardsContainer,
} from '../searchCity/SearchCity.styles';
import {
  Button,
  ButtonText,
  CardsContainerHome,
  CardsScroll,
  ViewHome,
  ViewText,
} from '../home/Home.styles';
import {useNavigation} from '@react-navigation/native';
import {CitiesStateProps, setWeather} from '../../store/redux/citiesSlice';
import {Alert, AsyncStorage} from 'react-native';
import {api} from '../../service/api';
import {SearchCityProps} from '../searchCity/SearchCity';
import {ParamListBase, RouteProp, useRoute} from '@react-navigation/native';
import {Header} from '../../components/header/Header';
import {StoreStateProps} from '../../store/redux/store';

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
  const routes = useRoute<RouteProp<Params, 'params'>>();
  const {cities, selectedLocation, currentWeather, dailyWeather} = useSelector<
    TypedUseSelectorHook<StoreStateProps>
  >(state => state.cities);
  const [citiesWeather, setCitiesWeather] = useState(cities);
  const [weatherCity, setWeatherCity] = useState<WeatherProps[]>([]);
  const [loadingWeather, setLoadingWeather] = useState(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  console.log('eita', cities);

  useEffect(() => {
    cities.forEach(city => {
      (async (): Promise<void> => {
        try {
          console.log('CIDADE:', city);
          const results = await api.get<WeatherProps>('/onecall', {
            params: {
              lon: city.location.lng,
              lat: city.location.lat,
              exclude: 'minutely,hourly',
            },
          });
          console.log(
            'results current da cidade:',
            city.structured_formatting.main_text,
            'current dela:',
            results.data.current,
          );
          // const newWeather = results.data.daily.map(weather => ({
          //   id: weather.dt,
          //   date_time: weather.dt,
          //   temp: Math.ceil(weather.temp.day),
          //   temp_min: Math.ceil(weather.temp.min),
          //   temp_max: Math.ceil(weather.temp.max),
          //   icon: weather.weather[0].icon,
          //   description: weather.weather[0].description,
          // }));

          // setWeather({current: results.data.current, daily: newWeather}),
          // dispatch(
          //   setWeather({
          //     place_id: city.place_id,
          //     currentLocation: results.data.current,
          //   }),
          // );

          dispatch(
            setWeather({
              id: city.place_id,
              currentLocation: results.data.current,
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
  // console.log('citiesWeatherLocationCurrent', citiesWeather);

  // const updateWeather = ;

  // }, []);
  // console.log('daily weather', dailyWeather);
  // console.log('current weather', currentWeather);
  return (
    <ViewHome>
      <Header />
      {cities.length === 0 && navigation.navigate('Home')}
      <>
        <CardsScroll>
          <CardsContainerHome>
            <CardWeather />
          </CardsContainerHome>
        </CardsScroll>
        <Button onPress={() => navigation.navigate('SearchCity')}>
          <ButtonText>+</ButtonText>
        </Button>
      </>
    </ViewHome>
  );
}
