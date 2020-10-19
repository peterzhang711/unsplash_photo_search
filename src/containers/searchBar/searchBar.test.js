import React from 'react'
import { shallow, configure } from 'enzyme'
import SearchBar from './index'
import { findByTestAttr } from './../../utils' 
import Adapter from 'enzyme-adapter-react-16';

const setUpShallow = (props={}) => {
    const component = shallow(<SearchBar {...props} />)
    return component
}

configure({adapter: new Adapter()});

describe('SearchBar Component', () => {
    let component
    beforeEach(() => {
        component = setUpShallow()
    })
    it('Should render with NO errors', () => {
        const wrapper = findByTestAttr(component, 'searchBarCompo')
        expect(wrapper.length).toBe(1)
    });

    it('Should render a search bar', () => {
        const searchbar = findByTestAttr(component, 'searchbar')
        expect(searchbar.length).toBe(1)

    })
});