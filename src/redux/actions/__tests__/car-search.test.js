import MockFetch from '../../../../__mocks__/mock-fetch';
import mockResults from '../../../../__mocks__/mock-results';

import { DATA_REQUESTED, DATA_RECEIVED, DATA_REQUEST_FAILED } from '../../consts';
import carSearch from '../car-search.js';

describe('carSearch Action', () => {
    let mockFetch, mockDispatch;

    beforeEach(() => {
        mockFetch = MockFetch();
        mockDispatch = jest.fn();
    });

    afterEach(() => {
        mockFetch.unmock();
    })

    it(`dispatches a ${DATA_REQUESTED} action`, async () => {
        await carSearch()(mockDispatch);
        expect(mockDispatch).toHaveBeenCalledWith({
            type: DATA_REQUESTED
        });
    });

    it('it requests the data from correct url', async () => {
        await carSearch()(mockDispatch);
        expect(fetch).toHaveBeenCalledWith('https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=');
    });


    it('interpolates the term and amount of rows', async () => {
        await carSearch('test', 10)(mockDispatch);
        expect(fetch).toHaveBeenCalledWith('https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=10&solrTerm=test');
    });

    it(`dispatches a ${DATA_REQUEST_FAILED} when fetch returns an error`, async () => {
        await carSearch()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith({
            type: DATA_REQUEST_FAILED
        });
    });

    it(`dispatches a ${DATA_RECEIVED} action with the received data`, async () => {
        const expectedData = {
            results: {
                isGooglePowered: false,
                docs: mockResults(),
                numFound: 5000
            }
        }

        mockFetch.mockRequest('https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=', expectedData);

        await carSearch()(mockDispatch);
        expect(mockDispatch).toHaveBeenCalledWith({
            type: DATA_RECEIVED,
            payload: mockResults()
        });
    });
});
