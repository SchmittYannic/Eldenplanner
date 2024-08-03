import { ReactElement, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdSave } from "react-icons/md";

import { RootState } from "src/app/store";
import { useAddNewBuildMutation, useUpdateBuildMutation } from "src/features/charplanner/charplannerApiSlice";
import { BuildType, selectBuildById } from "src/features/builds/buildsApiSlice";
import { selectCharplannerData } from "src/features/charplanner/charplannerSlice";
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
import { isCustomError, isCustomFormError, isFieldName } from "src/utils/typeguards";

type SaveBuildPropsType = {
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
}

type SaveBuildFormType = {
    buildtitle: string,
}

const SaveBuild = ({
    setTrigger,
}: SaveBuildPropsType): ReactElement => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const charplannerData = useSelector(selectCharplannerData);
    const param = useParams();
    const { userId } = useAuth();

    const [addNewBuild, {
        isLoading: isSaveLoading,
        isError: isSaveError,
    }] = useAddNewBuildMutation();

    const [updateBuild, {
        isLoading: isUpdateLoading,
        isError: isUpdateError,
    }] = useUpdateBuildMutation();

    const build = useSelector((state: RootState) => {
        if (param?.buildId) {
            return selectBuildById(state, param.buildId) as BuildType
        }
        return null
    });
    const isBuildAuthor = userId === build?.user;
    const initialBuildTitle = isBuildAuthor ? build?.title : "";

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
            if (isBuildAuthor) {
                const { message } = await updateBuild({
                    buildId: param.buildId,
                    userId,
                    title: buildtitle,
                    data: charplannerData
                }).unwrap();
                reset({
                    buildtitle: "",
                });
                setTrigger(false);
                dispatch(addToast({ type: "success", text: message }));
            } else {
                const { message, action } = await addNewBuild({
                    userId,
                    title: buildtitle,
                    data: charplannerData
                }).unwrap();
                reset({
                    buildtitle: "",
                });
                setTrigger(false);
                navigate(`/charplanner/${action}`);
                dispatch(addToast({ type: "success", text: message }));
            }
        } catch (err) {
            if (isCustomFormError(err) && isFieldName(err.data.context.label, data)) {
                setResponseMsg(err.data.message);
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
        <Dialog className="dialog__savebuild" setDialog={setTrigger}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogMain>
                    <DialogIcon>
                        <MdSave />
                    </DialogIcon>
                    <DialogContent>
                        <h3>Save Build</h3>

                        <div className="divider-4" />

                        <p>
                            Add a descriptive title to your build so others can easily find it in the Community Builds section.
                        </p>

                        <div className="divider-4" />

                        <Input
                            name="buildtitle"
                            type="text"
                            label="Build Title"
                            maxLength={50}
                            register={register}
                            error={errors.buildtitle}
                        />

                        <div className="divider-4" />

                        {((isUpdateError || isSaveError) && responseMsg) ? (
                            <>
                                <div className="divider-4" />
                                <div className="sm-alert errmsg full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span>{responseMsg}</span>
                                </div>
                            </>
                        ) : (<></>)}

                    </DialogContent>
                </DialogMain>
                <DialogButtons>
                    <button
                        className="button"
                        type="button"
                        onClick={() => setTrigger(false)}
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