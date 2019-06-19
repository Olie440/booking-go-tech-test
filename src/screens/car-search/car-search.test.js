import React from 'react';
import { shallow } from 'enzyme';
import { App } from './hotel-search.component';

it('renders without crashing', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
