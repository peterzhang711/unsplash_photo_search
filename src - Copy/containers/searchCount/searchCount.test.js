import React from 'react'
import { shallow, configure } from 'enzyme'
import SearchBar from './index'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

test('it should render with NO errors', () => {

});