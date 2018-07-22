import React from 'react';

import { shallow, mount } from 'enzyme';

import App from './App';

describe( 'App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
    // localStorage.clear();
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

  it('should have a default tenDayArray and hourlyArray of an empty array and empty currWeatherObj', () => {
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

});