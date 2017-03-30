/**
 * Created by xiawei05 on 17/3/30.
 */
import { GET_NAME } from '../actions/indexAction'

const initialState = {
    name: 'who are you'
}

export default function updateName(state = initialState, action) {
    if(action.type === GET_NAME) {
        return Object.assign({}, state, {
            name: action.name
        })
    }
    return state
}
