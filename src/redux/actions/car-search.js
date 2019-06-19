import { DATA_REQUESTED, DATA_RECEIVED, DATA_REQUEST_FAILED } from '../consts';

export default function carSearch(term = '', rows = 6) {
    return async function (dispatch) {
        dispatch({
            type: DATA_REQUESTED
        });

        return fetch(`https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${rows}&solrTerm=${term}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: DATA_RECEIVED,
                    payload: data.results.docs
                });
            })
            .catch(() => {
                dispatch({
                    type: DATA_REQUEST_FAILED
                });
            });
    }
}
