export const returnWeatherData = (data) => {
    let currWeatherObj = {
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

    let hourlyArray = data.hourly_forecast.map(hour => {
      return hour = {
        'hour': hour.FCTTIME.civil,
        'icon': hour.icon_url,
        'temp': hour.temp.english
      }
    })
    let tenDayArray = data.forecast.simpleforecast.forecastday.map(day => {
      return day = {
        'day': day.date.weekday,
        'icon': day.icon_url,
        'high': day.high.fahrenheit,
        'low': day.low.fahrenheit
      }
    })

    return { currWeatherObj, hourlyArray, tenDayArray };
}