import React from 'react'; 
import {shallow} from 'enzyme'; 
import Messages from './components/Messages'; 
import { findByTestAttr } from './test/testHelpers.test';


const setUp = () => shallow(<Messages />); 

describe('Messages component', () => {

    test('renders message component without error', () => {
        const wrapper = setUp(); 
        const compnent = findByTestAttr(wrapper, 'messages-component'); 
        expect(compnent.length).toBe(1);
    })
})