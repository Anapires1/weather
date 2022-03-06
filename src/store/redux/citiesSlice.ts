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
      return {...state, cities: []};
    },
  },
});

export const {setCities, clearCity} = citiesSlice.actions;

export default citiesSlice.reducer;
