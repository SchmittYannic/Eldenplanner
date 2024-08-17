import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/app/store";
import { CommentDeletePropsType, CommentOptionlistPropsType, PopupStateType, PositionType } from "src/types";


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
        resetPopupState: (state) => {
            state.popup = initialState;
        },
        toggleOpen: (state) => {
            state.popup.isOpen = !state.popup.isOpen;
        },
        setPopupIsOpen: (state, { payload }: PayloadAction<boolean>) => {
            state.popup.isOpen = payload;
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
        addCommentDelete: (state, { payload }: PayloadAction<{ props: CommentDeletePropsType }>) => {
            const { props } = payload;
            state.popup = {
                refId: null,
                isOpen: true,
                type: "COMMENT_DELETE",
                position: state.popup.position,
                props,
            }
        },
    },
});

export const {
    resetPopupState,
    toggleOpen,
    setPopupIsOpen,
    setPosition,
    addCommentOptionlist,
    addCommentDelete
} = popupSlice.actions;

export default popupSlice.reducer;

export const selectPopup = (state: RootState) => state.popup.popup;
export const selectPopupRefId = (state: RootState) => state.popup.popup.refId;