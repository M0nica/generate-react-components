import React from 'react';
import { shallow } from 'enzyme';
import StatelessComponent from '../index';


const render = () =>
	shallow(<EventActionsDropdownComponent />);


describe('<StatelessComponent />', () => {
	it('exists', () => {
		expect(render().exists()).toBe(true);
        }
    }