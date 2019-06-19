import React from 'react';
import { shallow } from 'enzyme';
import { SearchResults, mapStateToProps } from './search-results.component';
import mockResults from '../../../../../__mocks__/mock-results';

describe('<SearchResults />', () => {
    let component, props;

    beforeEach(() => {
        props = {
            carSearch: jest.fn(),
            results: {
                state: 'None',
                data: null
            }
        };

        component = shallow(<SearchResults {...props} />);
    });

    it('renders just the input when results.state === None', () => {
        expect(component).toMatchSnapshot();
    });

    it('renders the input and loading spinner when results.state === Loading', () => {
        component.setProps({
            results: {
                state: 'Loading',
                data: null
            }
        });

        expect(component).toMatchSnapshot();
    });

    it('renders the input and results when results.state === Success', () => {
        component.setProps({
            results: {
                state: 'Success',
                data: mockResults()
            }
        });

        expect(component).toMatchSnapshot();
    });

    it('updates the state when input is changed', () => {
        component.find('.search-results__input').simulate('change', {
            target: {
                value: 'aa'
            }
        });

        expect(component.find('.search-results__input')).toMatchSnapshot();
        expect(component.state('input')).toEqual('aa');
    });

    it('calls the carSearch action when input is changed', () => {
        component.find('.search-results__input').simulate('change', {
            target: {
                value: 'aa'
            }
        });

        component.instance().doSearch.flush();

        expect(props.carSearch).toHaveBeenCalledWith('aa', 6);
    });

    it('mapStateToProps returns the result key', () => {
        const result = mapStateToProps({
            foo: 'bar',
            results: {
                state: 'None',
                data: null
            }
        });

        expect(result).toEqual({
            results: {
                state: 'None',
                data: null
            }
        });
    });
});
