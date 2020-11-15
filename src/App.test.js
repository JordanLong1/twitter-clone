import { render, screen } from '@testing-library/react';
import App from './App';

import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import {findByTestAttr} from './test/testHelpers.test'
Enzyme.configure({adapter: new EnzymeAdapter()}); 

const setUp = () => shallow(<App />); 

test('renders links container without throwing an error', () => {
  const wrapper = setUp(); 
  const linksContainer = findByTestAttr(wrapper, 'links-container'); 
  expect(linksContainer.length).toBe(1);
});
