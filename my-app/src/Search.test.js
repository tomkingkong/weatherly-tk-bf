import React from 'react';
import { shallow, mount } from 'enzyme';

import Search from './Search';

describe( 'Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('Should have an intial userLocInput of an empty string', () => {
    expect(wrapper.state().userLocInput).toEqual('');
  });

  it('should render a form with and input and a button', () => {
    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('input').length).toEqual(2);
  })

  it('Should update state when user enters a location', () => {
    let userInput = wrapper.find('input').first();
    let submitButton = wrapper.find('button').first();
    let event = {
      target: {
        value: 'foo'
      }
    }

    userInput.simulate('change', event);
    expect(wrapper.state().userLocInput).toEqual('FOO');
  })

  it('should run displaySuggestions when text is entered in the input field')
    wrapper = mount(<Search />)
    console.log(wrapper.instance().locTrie.wordCount)
});