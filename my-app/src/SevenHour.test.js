import React from 'react';
import { shallow } from 'enzyme';

import SevenHour from './SevenHour';

describe( 'SevenHour', () => {
  let wrapper;
  const mockArray = [
    {hour: 1, icon: 'ha', temp: 90, condition: 'sweaty'},
    {hour: 1, icon: 'ha', temp: 20, condition: 'sweaty'},
    {hour: 1, icon: 'ha', temp: 50, condition: 'sweaty'},
    {hour: 1, icon: 'ha', temp: 50, condition: 'sweaty'},
    {hour: 1, icon: 'ha', temp: 50, condition: 'sweaty'},
    {hour: 1, icon: 'ha', temp: 50, condition: 'sweaty'},
    {hour: 1, icon: 'ha', temp: 50, condition: 'sweaty'},
    {hour: 1, icon: 'ha', temp: 50, condition: 'sweaty'},
  ]

  beforeEach(() => {
    wrapper = shallow(<SevenHour hourlyArray={ mockArray } />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render Cards', () => {
    expect(wrapper.find('Card').length).toEqual(7);
  });
})