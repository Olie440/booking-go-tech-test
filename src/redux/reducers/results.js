
import { DATA_REQUESTED, DATA_RECEIVED, DATA_REQUEST_FAILED, DATA_CLEARED } from '../consts';

const defaultState = {
    state: 'None',
    data: null
}

export default function (state = defaultState, { type, payload } = {}) {
    switch (type) {
        case DATA_REQUESTED:
            return { state: 'Loading', data: null };

        case DATA_RECEIVED:
            return { state: 'Success', data: payload };

        case DATA_REQUEST_FAILED:
            return { state: 'Error', data: null };

        case DATA_CLEARED:
            return defaultState;

        default:
            return state;
    }
}
