import _ from 'lodash'

import {FETCH_COMPANIES} from "../actions";

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_COMPANIES:
            return _.mapKeys(action.payload.data, 'id');
            break;
        default:
            return state;
    }
}