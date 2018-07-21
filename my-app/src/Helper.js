export const returnWeatherData = (data) => {
    let currWeatherObj = {};
    let hourlyArray = [];
    let tenDayArray = [];
    let weatherDataObj;

    currWeatherObj = {
      'currentCity': data.current_observation.display_location.city.toUpperCase(),
      'currentState': data.current_observation.display_location.state,
      'currentCondition': data.forecast.simpleforecast.forecastday[0].conditions,
      'currentDay': data.forecast.simpleforecast.forecastday[0].date.weekday,
      'currentTemp': data.current_observation.temp_f,
      'currentHigh': data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      'currentLow': data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
      'currentIcon': data.current_observation.icon_url,
      'summary': data.forecast.txt_forecast.forecastday[0].fcttext
    };

    hourlyArray = data.hourly_forecast;
    tenDayArray = data.forecast.simpleforecast.forecastday;

    weatherDataObj = { 
      currWeatherObj, 
      hourlyArray, 
      tenDayArray 
    }

    return weatherDataObj
}