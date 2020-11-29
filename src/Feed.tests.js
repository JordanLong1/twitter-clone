import React from 'react'; 
import {shallow} from 'enzyme'; 
import Feed from './components/Feed';
import {findByTestAttr} from './test/testHelpers.test'

const setUp = () => shallow(<Feed />); 
describe('Feed component', () => {


    test('renders component without error', () => {
        const wrapper = setUp(); 
        const component = findByTestAttr(wrapper, 'feed-component'); 
        expect(component.length).toBe(1);
    })
})