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

  it('should have a default selectedCity of Denver', () => {
    expect(wrapper.state().selectedCity).toEqual('DENVER');
  })

  it('should have have a default selectedState of CO', () => {
    expect(wrapper.state().selectedState).toEqual('CO');
  })

  it('should have a default currentWeatherObj which is an empty object', () => {
    expect(wrapper.state().currWeatherObj).toEqual({});
  })

  it('should have a default hourlyArray of an empty array', () => {
    expect(wrapper.state().hourlyArray).toEqual([]);
  })

 

});