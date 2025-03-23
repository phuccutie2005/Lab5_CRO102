import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageState {
    imageUri: string | null;
}

const initialState: ImageState = {
    imageUri: null,
};

const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        setImage: (state, action: PayloadAction<string>) => {
            state.imageUri = action.payload;
        },
    },
});

export const { setImage } = imageSlice.actions;
export default imageSlice.reducer;
