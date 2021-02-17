import { ActionCreator, Reducer } from "redux";

export type RootState = {
    commentText: string;
    token: string;
};

const initialState: RootState = {
    commentText: 'Усем превед!',
    token: ''
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string;
};
const SET_TOKEN = 'SET_TOKEN';
type SetTokenAction = {
    type: typeof SET_TOKEN;
    token: string;
};

export const setToken: ActionCreator<SetTokenAction> = (token) => ({
    type: SET_TOKEN,
    token
})
//dispatch(setToken(window.__token__));

export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
    type: UPDATE_COMMENT,
    text
});

type Action = UpdateCommentAction | SetTokenAction;
export const rootReducer: Reducer<RootState, Action> = (state=initialState, action)=>{
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