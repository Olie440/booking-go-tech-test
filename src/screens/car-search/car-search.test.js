import React from 'react';
import { shallow } from 'enzyme';
import CarSearchScreen from './car-search.component';

it('renders without crashing', () => {
  const component = shallow(<CarSearchScreen />);
  expect(component).toMatchSnapshot();
});
