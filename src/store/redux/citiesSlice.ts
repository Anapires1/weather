import {createSlice} from '@reduxjs/toolkit';
import {SearchCityProps} from '../../pages/searchCity/SearchCity';

export interface CitiesStateProps {
  cities: SearchCityProps[];
}

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    cities: [] as SearchCityProps[],
    selectedLocation: {},
    dailyWeather: {},
  },

  reducers: {
    setCities(state, {payload}) {
      return {...state, cities: [...state.cities, payload]};
    },
    setLocation(state, {payload}) {
      return {...state, selectedLocation: payload};
    },
    setWeather(state, {payload}) {
      // console.log('AAAAAAAAAAAAAAAAAAAHHHHHHHHHHHHHHHH');
      console.log('estate cities', state.cities);
      const newCities = state.cities.map(c => {
        if (c.place_id === payload.id) {
          return {
            ...c,
            currentLocation: payload.currentLocation,
          };
        }
        return {...c};
      });
      // let newCities = state.cities;
      // const indexCity = newCities.findIndex(
      //   city => city.place_id === payload.place_id,
      // );
      // newCities[indexCity].currentLocation = payload.currentLocation;
      // // console.log('new|City', newCities);
      // return {
      //   ...state,
      //   cities: newCities,
      // };
      return {...state, cities: newCities};
    },
    clearCity(state, {payload}) {
      const newCities = state.cities.filter(city => city.place_id !== payload);
      return {...state, cities: newCities};
    },
  },
});

export const {setCities, clearCity, setLocation, setWeather} =
  citiesSlice.actions;

export default citiesSlice.reducer;
