import API from './API';
import { AsyncStorage } from 'react-native';
export const TOKEN_KEY = "@api-Token";
export const isAuthenticated = () => AsyncStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => AsyncStorage.getItem(TOKEN_KEY);
export const login = token => {
  AsyncStorage.setItem(TOKEN_KEY, token);
  API.post('/auth').then((result) => {
    // setUser(result.data);
    // console.log("UserFromAPI", getUser());
  })  
};
export const logout = () => {
  AsyncStorage.removeItem(TOKEN_KEY);
};