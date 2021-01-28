import Dropdown from '../Dropdown';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() })

describe('Dropdown',()=>{
    test('should render',()=>{
    const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
    expect(wrapper).toBeDefined();
    //expect(wrapper.find('#button')).toBeDefined();
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
    })
});