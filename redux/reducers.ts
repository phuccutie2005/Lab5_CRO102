import { combineReducers } from '@reduxjs/toolkit';

const dummyReducer = (state = {}, action: any) => {
    return state;
};

const rootReducer = combineReducers({
    dummy: dummyReducer, // Ít nhất cần một reducer hợp lệ
});

export default rootReducer;
