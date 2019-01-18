
import parserWeather from "../utils/parserWeather";

import {
  API_ROOT,
  START,
  ERROR,
  SUCCESS,
  FETCH_WEATHER
} from "../store/constants";


export function fetchWeather (str) {
  return (dispatch) => {
    dispatch({type:FETCH_WEATHER+START,query:str});
    fetch( API_ROOT + encodeURIComponent(str))
      .then(res=> res.json())
      .then(res => {
        dispatch({type: FETCH_WEATHER+SUCCESS, payload: res});
      })
      .catch( err => {
        dispatch({type: FETCH_WEATHER+ERROR});
      })
     
  }
}
const initialState = {
  query: "",
  status: false,
  search: null
};

const actionHandlers = {

  [FETCH_WEATHER+START]: (state, action) => {
    const {query} = action;
    return {...state,
      "status":true,
      query
    };
  },
  [FETCH_WEATHER+SUCCESS]: (state, action) => {
    const { payload } = action;
    const d = parserWeather(payload);
    return {...state, status: false, search: d};
  },
  [FETCH_WEATHER+ERROR]: (state, action) => {
    
    return {...state, status:false, search: null};
  }
};

const reducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];

  return handler ? handler(state, action) : state;
};

export default reducer;
