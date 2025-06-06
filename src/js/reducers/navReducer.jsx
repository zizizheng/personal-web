import { CHANGE_PAGE } from '../action/navAction';

const initialState = {
    curPage: 'home',
    navOffset: '467'
}

// bad solution, need to be changed
const bigHeader = '467';
const smallHeader = '181';

export default function navReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_PAGE:
            // console.log('dispatch page success');
            // console.log({ ...state, curPage: action.name });
            return { ...state, curPage: action.name, navOffset: (action.name === 'home' ? bigHeader : smallHeader) };
        default:
            return state;
    }
}
