import React from 'react';

import { shallow, mount } from 'enzyme';

import App from './App';
import Data from './MockData'
import { returnWeatherData } from './Helper.js'

describe( 'App', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();
    wrapper = shallow(<App />);
    wrapper.instance().updateCurrentData = jest.fn()
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();

  });

  it('should have a default selectedLocation of an empty string', () => {
    expect(wrapper.state().selectedLocation).toEqual('');
  })

  it.skip('should have a default searchError state of false', () => {
    expect(wrapper.state().searchError).toEqual(false);
  })

  it.skip('should have a default tenDayArray and hourlyArray of an empty array and empty currWeatherObj', () => {
    expect(wrapper.state().currWeatherObj).toEqual({});
    expect(wrapper.state().hourlyArray).toEqual([]);
    expect(wrapper.state().tenDayArray).toEqual([]);
  })

  it('should render Header and Search components', () => {
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  })

  it('should retrieve data from local storage on mount', () => {

    localStorage.setItem('savedLoc', JSON.stringify(80204));

    wrapper = mount(<App />);
    expect(wrapper.state().selectedLocation).toEqual(80204);
  })

  it('should render CurrentWeather, SevenHour and TenDay components after a location has been entered', () => {
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('SevenHour').length).toEqual(1);
    expect(wrapper.find('TenDay').length).toEqual(1);
  })

  it.skip('should update state', () => {
    expect(wrapper.state().tenDayArray).toEqual([]);
    expect(wrapper.state().hourlyArray).toEqual([]);
    expect(wrapper.state().currWeatherObj).toEqual({});

    let weatherDataObj = returnWeatherData(Data);
    let expectedObj = {
      "currentCity": "LOUISVILLE",
      "currentCondition": "Partly Cloudy",
      "currentDay": "Wednesday",
      "currentHigh": "51",
      "currentIcon": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "currentLow": "32",
      "currentState": "KY",
      "currentTemp": 46,
      "summary": "Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph."}

    wrapper.setState({
      currWeatherObj: weatherDataObj.currWeatherObj,
      hourlyArray: weatherDataObj.hourlyArray,
      tenDayArray: weatherDataObj.tenDayArray
    });
    expect(wrapper.state().tenDayArray.length).toEqual(10);
    expect(wrapper.state().hourlyArray.length).toEqual(36);
    expect(wrapper.state().currWeatherObj).toEqual(expectedObj);
  })
});