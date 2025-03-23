import { configureStore, combineReducers } from "@reduxjs/toolkit";
import imageReducer from "./imageSlice";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["image"], // Chỉ lưu "image", bỏ qua các key khác
    migrate: async (state) => {
        if (state) {
            // Xóa key "dummy" nếu có
            const { dummy, ...validState } = state;
            return validState;
        }
        return state;
    },
};

const rootReducer = combineReducers({
    image: imageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST"],
            },
        }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
