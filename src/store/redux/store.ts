import {configureStore} from '@reduxjs/toolkit';
import citiesSlice, {CitiesStateProps} from './citiesSlice';

export interface StoreStateProps {
  cities: CitiesStateProps;
}

export const store = configureStore({
  reducer: {
    cities: citiesSlice,
  },
});
