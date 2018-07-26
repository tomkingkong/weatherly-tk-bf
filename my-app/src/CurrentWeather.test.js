import React from 'react';
import { shallow } from 'enzyme';

import CurrentWeather from './CurrentWeather.js';

describe( 'CurrentWeather', () => {
  let wrapper;

  let currWeatherObj = {
    currentCity: "DENVER",
    currentCondition: "Chance of a Thunderstorm",
    currentDay: "Wednesday",
    currentHigh: "83",
    currentIcon: "/static/media/cloudy.fd1522b4.svg",
    currentLow: "62",
    currentState: "CO",
    currentTemp: 80,
    summary: "Showers and thunderstorms early. Lows overnight in the low 60s."
  }

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather currWeatherObj={ currWeatherObj } />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
  
});


