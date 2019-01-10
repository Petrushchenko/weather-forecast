const WEATHER_API_KEY = '47bc274ab59ba52ed10ab021ce716200';

export const API_ROOT = `https://api.openweathermap.org/data/2.5/forecast?&APPID=${WEATHER_API_KEY}&units=metric&q=`;


export const START = "_START";
export const ERROR = "_ERROR";
export const SUCCESS = "_SUCCESS";

export const CHANGE_QUERY = "CHANGE_QUERY";
export const FETCH_WEATHER = "FETCH_WEATHER";