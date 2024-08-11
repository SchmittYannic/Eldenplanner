import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";
import { CommentOptionlistPropsType, PopupStateType, PositionType } from "src/types";


const initialState: PopupStateType = {
    refId: null,
    isOpen: true,
    type: "NONE",
    position: {},
    props: {},
};

const popupSlice = createSlice({
    name: "popup",
    initialState: { popup: initialState },
    reducers: {
        toggleOpen: (state) => {
            state.popup.isOpen = !state.popup.isOpen;
        },
        setPosition: (state, { payload }: PayloadAction<PositionType>) => {
            const { left, top, right, bottom } = payload;
            state.popup.position = { left, top, right, bottom };
        },
        addCommentOptionlist: (state, { payload }: PayloadAction<{ refId: string, props: CommentOptionlistPropsType }>) => {
            const { refId, props } = payload;

            if (refId === state.popup.refId) {
                state.popup.isOpen = !state.popup.isOpen;
            } else {
                state.popup = {
                    refId,
                    isOpen: true,
                    type: "COMMENT_OPTIONLIST",
                    position: state.popup.position,
                    props,
                };
            }
        },
    },
});

export const {
    toggleOpen,
    setPosition,
    addCommentOptionlist,
} = popupSlice.actions;

export default popupSlice.reducer;

export const selectPopup = (state: RootState) => state.popup.popup;
export const selectPopupRefId = (state: RootState) => state.popup.popup.refId;