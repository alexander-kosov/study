import { ActionCreator, AnyAction, Reducer } from "redux";

export type RootState = {
    commentText: string;
    token: string;
};

const initialState: RootState = {
    commentText: 'Усем превед!',
    token: ''
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const SET_TOKEN = 'SET_TOKEN';

export const setToken: ActionCreator<AnyAction> = (token) => ({
    type: SET_TOKEN,
    token
})
//dispatch(setToken(window.__token__));

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text
});

export const rootReducer: Reducer<RootState> = (state=initialState, action)=>{
    switch(action.type){
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            }
        case SET_TOKEN: 
            return {
                ...state,
                token: action.token
            }    
        default:
            return state;
    }
}