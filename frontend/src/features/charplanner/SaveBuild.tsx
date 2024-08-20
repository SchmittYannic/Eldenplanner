import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAddNewBuildMutation, useUpdateBuildMutation } from "src/features/charplanner/charplannerApiSlice";
import { selectAuthorId, selectBuildId, selectCharplannerData, selectTitle } from "src/features/charplanner/charplannerSlice";
import { addToast } from "src/features/toasts/toastSlice";
import useAuth from "src/hooks/useAuth";
import {
    AsyncButton,
    Dialog,
    DialogButtons,
    DialogContent,
    DialogIcon,
    DialogMain,
    Input,
} from "src/components/ui";
import { MdSave } from "src/components/icons";
import { isCustomError, isCustomFormError, isFieldName } from "src/utils/typeguards";

type SaveBuildPropsType = {
    callback: Function,
}

type SaveBuildFormType = {
    buildtitle: string,
}

const SaveBuild = ({
    callback,
}: SaveBuildPropsType): ReactElement => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const charplannerData = useSelector(selectCharplannerData);
    const { userId } = useAuth();

    const [addNewBuild, {
        isLoading: isSaveLoading,
        isError: isSaveError,
    }] = useAddNewBuildMutation();

    const [updateBuild, {
        isLoading: isUpdateLoading,
        isError: isUpdateError,
    }] = useUpdateBuildMutation();

    const buildId = useSelector(selectBuildId);
    const authorId = useSelector(selectAuthorId);
    const title = useSelector(selectTitle);

    const isBuildAuthor = userId === authorId;
    const initialBuildTitle = isBuildAuthor && title ? title : "";

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors },
    } = useForm<SaveBuildFormType>({
        defaultValues: {
            buildtitle: initialBuildTitle,
        }
    });

    const [responseMsg, setResponseMsg] = useState("");

    const buttonText = isBuildAuthor ? "Update" : "Save";

    const onSubmit: SubmitHandler<SaveBuildFormType> = async (data) => {
        const { buildtitle } = data;
        setResponseMsg("");

        try {
            if (isBuildAuthor && buildId) {
                const { message } = await updateBuild({
                    buildId,
                    userId,
                    title: buildtitle,
                    data: charplannerData,
                }).unwrap();
                reset({
                    buildtitle: "",
                });
                callback();
                dispatch(addToast({ type: "success", text: message }));
            } else {
                const { message, action } = await addNewBuild({
                    userId,
                    title: buildtitle,
                    data: charplannerData,
                }).unwrap();
                reset({
                    buildtitle: "",
                });
                callback();
                navigate(`/charplanner/${action}`);
                dispatch(addToast({ type: "success", text: message }));
            }
        } catch (err) {
            if (isCustomFormError(err) && isFieldName(err.data.context.label, data)) {
                setResponseMsg("");
                setError(err.data.context.label, {
                    message: err.data.message,
                });
            } else if (isCustomError(err)) {
                setResponseMsg(err.data.message);
            } else {
                setResponseMsg("an error occured");
            }
        }
    }

    return (
        <Dialog className="dialog__savebuild" callback={callback}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogMain>
                    <DialogIcon>
                        <MdSave />
                    </DialogIcon>
                    <DialogContent>
                        <h3>Save Build</h3>

                        <div className="divider-4" />

                        <p>
                            Add a descriptive title to your build so others can easily find it on the Community Builds page.
                        </p>

                        <div className="divider-4" />

                        <Input
                            name="buildtitle"
                            type="text"
                            label="Build Title"
                            maxLength={50}
                            register={register("buildtitle", { required: true })}
                            error={errors.buildtitle}
                        />

                        {((isUpdateError || isSaveError) && responseMsg) ? (
                            <>
                                <div className="divider-4" />
                                <div className="sm-alert errmsg full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>{responseMsg}</span>
                                </div>
                            </>
                        ) : (<></>)}

                        <div className="divider-4" />
                    </DialogContent>
                </DialogMain>
                <DialogButtons>
                    <button
                        className="button"
                        type="button"
                        onClick={() => callback()}
                        title={"Cancel " + buttonText}
                    >
                        Cancel
                    </button>

                    <AsyncButton
                        isLoading={isBuildAuthor ? isUpdateLoading : isSaveLoading}
                        className="action-btn"
                        type="submit"
                        disabled={isUpdateLoading || isSaveLoading}
                        title={buttonText + " Build"}
                    >
                        {buttonText}
                    </AsyncButton>
                </DialogButtons>
            </form>
        </Dialog>
    )
}

export default SaveBuild