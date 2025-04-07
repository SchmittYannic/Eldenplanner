import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUpdateUserMutation } from "src/features/users/usersApiSlice";
import { setCredentials } from "src/features/auth/authSlice";
import { addToast } from "src/features/toasts/toastSlice";
import useAuth from "src/hooks/useAuth";
import { AsyncButton, Input, InputPassword } from "src/components/ui";
import { isCustomError, isCustomFormError, isFieldName } from "src/utils/typeguards";
import { edituserschema } from "src/validation/userschema";

type EditUserFormType = {
    newUsername: string,
    newEmail: string,
    newPassword?: string | undefined,
}

const EditUser = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const isAccountDeleteMode = searchParams.get("accountdelete") === "true";
    const { username, email } = useAuth();

    const [updateUser, {
        isLoading,
        isError,
    }] = useUpdateUserMutation();

    const {
        register,
        handleSubmit,
        setError,
        watch,
        setValue,
        formState: { errors },
    } = useForm<EditUserFormType>({
        defaultValues: {
            newUsername: username,
            newEmail: email,
            newPassword: "",
        },
        resolver: yupResolver(edituserschema),
    });

    const [responseMsg, setResponseMsg] = useState("");
    const [areDetailsChanged, setAreDetailsChanged] = useState(false);

    const watchedUsername = watch("newUsername", "");
    const watchedEmail = watch("newEmail", "");
    const watchedPassword = watch("newPassword", "");

    const onSubmit: SubmitHandler<EditUserFormType> = async (data) => {
        const { newUsername, newEmail, newPassword } = data;
        setResponseMsg("");

        try {
            const { message, accessToken } = await updateUser({ newUsername, newEmail, newPassword }).unwrap();
            handleCancelClicked();
            dispatch(setCredentials({ accessToken }));
            dispatch(addToast({ type: "success", text: message }));
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
    };

    const handleDeleteAccountClicked = async () => {
        // Create a copy of the current search params
        const newSearchParams = new URLSearchParams(searchParams);

        // Update the search params
        if (isAccountDeleteMode) {
            newSearchParams.delete("accountdelete");
        } else {
            newSearchParams.set("accountdelete", "true");
        }

        navigate(`?${newSearchParams.toString()}`, { replace: true });
    };

    const handleCancelClicked = () => {
        // Create a copy of the current search params
        const newSearchParams = new URLSearchParams(searchParams);

        // Update the search params
        newSearchParams.delete("edit");

        navigate(`?${newSearchParams.toString()}`, { replace: true });
    };

    useEffect(() => {
        const hasChanged =
            watchedUsername !== username ||
            watchedEmail !== email ||
            watchedPassword !== "";

        setAreDetailsChanged(hasChanged);
    }, [watchedUsername, watchedEmail, watchedPassword, username, email]);

    return (
        <form className="form__edituser" onSubmit={handleSubmit(onSubmit)}>
            <Input
                name="newUsername"
                type="text"
                label="Username"
                autoComplete="off"
                maxLength={20}
                register={register("newUsername", {
                    onBlur: (e) => setValue("newUsername", e.target.value.trim(), { shouldValidate: true })
                })}
                error={errors.newUsername}
            />

            <div className="divider-4" />

            <Input
                name="newEmail"
                type="email"
                label="Email"
                autoComplete="off"
                maxLength={80}
                register={register("newEmail", {
                    onBlur: (e) => setValue("newEmail", e.target.value.trim(), { shouldValidate: true })
                })}
                error={errors.newEmail}
            />

            <div className="divider-4" />

            <InputPassword
                name="newPassword"
                className="input-password"
                label="New Password"
                autoComplete="off"
                maxLength={80}
                register={register("newPassword")}
                error={errors.newPassword}
            />

            {(isError && responseMsg) ? (
                <>
                    <div className="divider-4" />
                    <div className="sm-alert errmsg full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{responseMsg}</span>
                    </div>
                </>
            ) : (<></>)}

            <div className="divider-4" />

            <div className="form__edituser--buttons">
                <button
                    className="button"
                    type="button"
                    onClick={handleCancelClicked}
                    title={"Cancel Edit"}
                >
                    Cancel
                </button>

                <div className="button-wrapper">
                    <button
                        className="action-btn action-btn--danger"
                        type="button"
                        onClick={handleDeleteAccountClicked}
                        title="Delete Account"
                    >
                        Delete Account
                    </button>

                    <AsyncButton
                        isLoading={isLoading}
                        className="action-btn"
                        type="submit"
                        disabled={!areDetailsChanged || isLoading}
                        title="Edit Account"
                    >
                        Submit Changes
                    </AsyncButton>
                </div>
            </div>
        </form>
    )
}

export default EditUser