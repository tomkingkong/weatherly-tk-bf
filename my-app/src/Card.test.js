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
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(2);
  })

  // it('should call toggleHours when card is clicked', () => {
  //   let mockFn = jest.fn();

  //   wrapper = shallow(<Card toggleHours={mockFn}/>);

  //   // wrapper.instance().toggleHours = jest.fn();
    
  //   let card = wrapper.find('article');

  //   card.simulate('click');

  //   expect(wrapper.props().toggleHours).toHaveBeenCalled();
  //   expect(wrapper.props().toggleHours).toHaveBeenCalledTimes(1);
  // })

})
