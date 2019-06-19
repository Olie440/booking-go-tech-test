import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import carSearch from '../../../../redux/actions/car-search';
import './search-results.style.css';

export class SearchResults extends Component {
    state = {
        input: ''
    }

    render() {
        return (
            <div className="search-results">
                <input
                    aria-label="city, airport, station, region and district..."
                    className="search-results__input"
                    id="search-results"
                    onChange={this.onInputChange}
                    value={this.state.input}
                    placeholder="city, airport, station, region and district..." />
                { this.renderResults() }
            </div>
        );
    }

    renderResults() {
        const { state, data } = this.props.results;

        if (state === 'Loading') {
            return (
                <div className="search-results__loading-spinner">
                    <FontAwesomeIcon icon={faSpinner} size="lg" spin />
                </div>
            );
        }

        if (state !== 'Success') {
            return null;
        }

        return (
            <div className="search-results__results">
                { data.map(ResultRow) }
            </div>
        );
    }

    onInputChange = (e) => {
        this.setState({ input: e.target.value });
        this.doSearch(e.target.value);
    };

    doSearch = debounce((term) => {
        this.props.carSearch(term, 6);
    }, 500);
}

const placeTypes = {
    T: 'Station',
    A: 'Airport',
    C: 'City',
    D: 'District'
}

function ResultRow({ placeType, bookingId, name, iata, city, region, country}) {
    return (
        <div className="search-results__result" key={bookingId}>
            <span className={`search-results__result-type ${placeType}`}>
                {placeTypes[placeType] || 'Other'}
            </span>
            <div className="search-results__result-cell">
                <span className="search-results__result-name">
                    {name} {iata && `(${iata})`}
                </span>
                <span className="search-results__result-location">
                    {city || region}, {country}
                </span>
            </div>
        </div>
    );
}

export function mapStateToProps({ results }) {
    return {
        results
    };
};

export default connect(mapStateToProps, { carSearch })(SearchResults);
