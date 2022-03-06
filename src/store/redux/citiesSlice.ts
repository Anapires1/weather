import {createSlice} from '@reduxjs/toolkit';
import {SearchCityProps} from '../../pages/searchCity/SearchCity';

export interface CitiesStateProps {
  cities: SearchCityProps[];
}

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    cities: [] as SearchCityProps[],
  },
  reducers: {
    setCities(state, {payload}) {
      return {...state, cities: [...state.cities, payload]};
    },
    clearCity(state, {payload}) {
      const newCities = state.cities.filter(city => city.place_id !== payload);
      return {...state, cities: newCities};
    },
  },
});

export const {setCities, clearCity} = citiesSlice.actions;

export default citiesSlice.reducer;
