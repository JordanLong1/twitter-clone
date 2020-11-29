import React from 'react'; 
import {shallow} from 'enzyme'; 
import Notifications from './components/Notifications'; 
import { findByTestAttr } from './test/testHelpers.test';


const setUp = () => shallow(<Notifications />); 

describe('notifications component', () => {

    test('renders notification component without error', () => {
        const wrapper = setUp(); 
        const compnent = findByTestAttr(wrapper, 'notifications-component'); 
        expect(compnent.length).toBe(1);
    })
})