import React from 'react'; 
import {shallow} from 'enzyme'; 
import CreateTweet from './components/CreateTweet'; 
import { findByTestAttr } from './test/testHelpers.test';


const setUp = () => shallow(<CreateTweet />); 

describe('CreateTweet component', () => {

    test('renders create tweet component without error', () => {
        const wrapper = setUp(); 
        const compnent = findByTestAttr(wrapper, 'create-tweet-component'); 
        expect(compnent.length).toBe(1);
    })
})