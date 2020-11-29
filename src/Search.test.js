import React from 'react'; 
import {shallow} from 'enzyme'; 
import Search from './components/Search'; 
import { findByTestAttr } from './test/testHelpers.test';


const setUp = () => shallow(<Search />); 

describe('Search component', () => {

    test('renders search component without error', () => {
        const wrapper = setUp(); 
        const compnent = findByTestAttr(wrapper, 'search-component'); 
        expect(compnent.length).toBe(1);
    })
})