const WEATHER = 'weather-from-zipcode';

const initialState = {
  weather: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case WEATHER:
      return {
        ...state,
        weather: action.result,
      };
    default:
      return state;
  }
}

export function getWeather(zipcode) {
  return {
    type: WEATHER,
    promise: (client) => client.post('/weather', {
      data: {
        zipcode: zipcode
      }
    })
  };
}
