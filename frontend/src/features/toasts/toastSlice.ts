import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";

const toastTypesArray = ["success"] as const;
export type ToastTypeType = typeof toastTypesArray[number];

type ToastType = {
    id: number,
    type: ToastTypeType,
    text: string,
}

const initialState: ToastType[] = [];

const toastSlice = createSlice({
    name: "toast",
    initialState: { list: initialState },
    reducers: {
        addToast: (state, action: PayloadAction<{ type: ToastTypeType, text: string }>) => {
            const { type, text } = action.payload;
            let id: number;

            if (state.list.length === 0) {
                id = 1;
            } else {
                id = state.list[state.list.length - 1].id + 1;
            }

            state.list = [...state.list, { id, type, text }];
        },
        deleteToast: (state, action) => {
            const { id } = action.payload;
            const index = state.list.map(item => item.id).indexOf(id);
            state.list.splice(index, 1);
        },
    }
});

export const { addToast, deleteToast } = toastSlice.actions;

export default toastSlice.reducer;

export const selectToast = (state: RootState) => state.toast.list;