import { createSlice } from '@reduxjs/toolkit';
import { LoginStates } from '../../shared/helpers/types';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    loginState: LoginStates.LOADING,
    navigationPage:""
  },
  reducers: {
    updatedLoginState(state, action) {
      return {
        ...state,
        loginState: action.payload,
      };
    },
    updatedNavigationPage(state, action) {
      return {
        ...state,
        navigationPage: action.payload,
      };
    },
  },
});

export const { updatedLoginState,updatedNavigationPage } = appSlice.actions;

export default appSlice.reducer;
