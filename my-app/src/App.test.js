import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';

describe( 'App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a default selectedLocation of an empty string', () => {
    expect(wrapper.state().selectedLocation).toEqual('');
  })

  it('should have a default currentWeatherObj which is an empty object', () => {
    expect(wrapper.state().currWeatherObj).toEqual({});
  })

  it('should have a default hourlyArray of an empty array', () => {
    expect(wrapper.state().hourlyArray).toEqual([]);
  })

 it('should have a default tenDayArray of an empty array', () => {
    expect(wrapper.state().tenDayArray).toEqual([]);
 })

});