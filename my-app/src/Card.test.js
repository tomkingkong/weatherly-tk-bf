import React from 'react';

import { shallow, mount } from 'enzyme';
import Card from './Card';
// import mockHourly from './mockHourly.js';
// import mockDayArray from './mockDayArray.js';



describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a default state including hours that is false', () => {
    expect(wrapper.state().hours).toEqual(false);
  })

  it('should render an article and img', () => {
    expect(wrapper.find('article').length).toEqual(1);
    expect(wrapper.find('img').length).toEqual(1);
  })

  it('should render sevenHour data', () => {
    let hourObject = { 
      hour: '12PM',
      icon: 'partlycloudy.svg',
      temp: 47,
      condition: 'Partly Cloudy',
    }
    wrapper = shallow(<Card 
                      hour={hourObject.hour} 
                      icon={hourObject.icon} 
                      temp={hourObject.temp} 
                      condition={hourObject.condition} 
                      />)
    expect(wrapper.find('p').first().text()).toEqual('12PM');
  })

  // it('should call toggleHours when card is clicked', () => {
  //   wrapper = shallow(<Card />);

  //   wrapper.instance().toggleHours = jest.fn();
    
  //   let card = wrapper.find('article');

  //   card.simulate('click');

  //   expect(wrapper.instance().toggleHours).toHaveBeenCalled();
  //   expect(wrapper.instance().toggleHours).toHaveBeenCalledTimes(1);
  // })

})
