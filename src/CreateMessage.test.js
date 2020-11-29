import React from 'react'; 
import {shallow} from 'enzyme'; 
import CreateMessage from './components/CreateMessage'; 
import { findByTestAttr } from './test/testHelpers.test';


const setUp = () => shallow(<CreateMessage />); 

describe('CreateMessage component', () => {

    test('renders create message component without error', () => {
        const wrapper = setUp(); 
        const compnent = findByTestAttr(wrapper, 'create-message-component'); 
        expect(compnent.length).toBe(1);
    })
})