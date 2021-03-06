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
      const newCities = state.cities.map(city => {
        if (city.place_id === payload.id) {
          return {
            ...city,
            currentLocation: payload.currentLocation,
            daily: payload.daily,
          };
        }
        return {...city};
      });
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
