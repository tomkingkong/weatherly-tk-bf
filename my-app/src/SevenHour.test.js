import React from 'react';
import { shallow, mount } from 'enzyme';

import SevenHour from './SevenHour';

describe( 'SevenHour', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SevenHour hourlyArray={ [] } />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should render Cards', () => {
    expect(wrapper.find('Card').length).toEqual(1);
  });
})