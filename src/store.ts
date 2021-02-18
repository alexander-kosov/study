import { Action, ActionCreator, Reducer } from "redux";
import { ThunkAction } from "redux-thunk";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";

export type RootState = {
    commentText: string;
    token: string;
    me: MeState
};

const initialState: RootState = {
    commentText: 'Усем превед!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
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

// export const setToken: ActionCreator<SetTokenAction> = (token) => ({
//     type: SET_TOKEN,
//     token
// });

/***************************************************************/
export const saveToken=(token:string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch,getState) => {
    dispatch({
        type: SET_TOKEN,
        token
    })
};
/***************************************************************/

export const updateComment: ActionCreator<UpdateCommentAction> = (text) => ({
    type: UPDATE_COMMENT,
    text
});

type MyAction = UpdateCommentAction | SetTokenAction | 
MeRequestAction| MeRequestSuccessAction | MeRequestErrorAction;
export const rootReducer: Reducer<RootState, MyAction> = (state=initialState, action)=>{
    switch(action.type){
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            };
        case SET_TOKEN: 
            return {
                ...state,
                token: action.token
            };   
        case ME_REQUEST:       
        case ME_REQUEST_SUCCESS:        
        case ME_REQUEST_ERROR: 
            return {
                ...state,
                me: meReducer(state.me, action),
            }       
        default:
            return state;
    }
}