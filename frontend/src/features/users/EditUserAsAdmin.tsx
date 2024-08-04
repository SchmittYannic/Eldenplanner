import { ReactElement, ChangeEvent, MouseEvent, KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdEdit } from "react-icons/md";

import { UserAsAdminType, useUpdateUserAsAdminMutation } from "src/features/users/usersAsAdminApiSlice";
import { addToast } from "src/features/toasts/toastSlice";
import { ROLES } from "src/config/roles";
import {
    AsyncButton,
    Checkbox,
    Dialog,
    DialogButtons,
    DialogContent,
    DialogIcon,
    DialogMain,
    FormInput,
    MultiSelect,
} from "src/components/ui";

type EditUserAsAdminPropsType = {
    user: UserAsAdminType,
}

const EditUserAsAdmin = ({
    user,
}: EditUserAsAdminPropsType): ReactElement => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [updateUserAsAdmin, {
        isLoading,
        isError,
    }] = useUpdateUserAsAdminMutation();

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [active, setActive] = useState(user.active);
    const [validated, setValidated] = useState(user.validated);

    const onUsernameChanged = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const onEmailChanged = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onActiveChanged = () => setActive(prev => !prev);
    const onValidatedChanged = () => setValidated(prev => !prev);
    const [roles, setRoles] = useState(user.roles);

    const [responseMsg, setResponseMsg] = useState("");

    const closeDialog = () => {
        navigate(`/users`);
    };

    const onSaveUserClicked = async (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const { message } = await updateUserAsAdmin({
                id: user.id,
                username,
                active,
                roles,
                validated,
                email
            }).unwrap();

            closeDialog();
            dispatch(addToast({ type: "success", text: message }));
        }
        catch (err: any) {
            if (!err.status) {
                setResponseMsg("No Server Response");
            } else if ([400, 401, 409].includes(err.status)) {
                setResponseMsg(err.data?.message);
            } else {
                setResponseMsg("an error occured");
            }
        }
    };

    const onResetChangesClicked = () => {
        setUsername(user.username);
        setEmail(user.email);
        setActive(user.active);
        setValidated(user.validated);
        setRoles(user.roles);
    };

    const isChanged = username !== user.username
        || email !== user.email
        || active !== user.active
        || validated !== user.validated
        || roles !== user.roles;

    return (
        <Dialog className="dialog__edituserasadmin" callback={closeDialog}>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <DialogMain>
                    <DialogIcon>
                        <MdEdit />
                    </DialogIcon>
                    <DialogContent>
                        <h3>Edit Account</h3>

                        <div className="divider-4" />

                        <p>
                            Change your account details below and click save to confirm.
                        </p>

                        <div className="divider-4" />

                        <FormInput
                            id="editasadmin-username"
                            name="editasadmin-username"
                            type="text"
                            label="Username"
                            maxLength={20}
                            value={username}
                            onChange={onUsernameChanged}
                            autoComplete="off"
                            title="change username"
                        />

                        <div className="divider-4" />

                        <FormInput
                            id="editasadmin-email"
                            name="editasadmin-email"
                            type="email"
                            label="Email"
                            maxLength={320}
                            value={email}
                            onChange={onEmailChanged}
                            autoComplete="off"
                            title="change email"
                        />

                        <div className="divider-2" />

                        <Checkbox label="Active" checked={active} setChecked={onActiveChanged} />

                        <div className="divider-1" />

                        <Checkbox label="Validated" checked={validated} setChecked={onValidatedChanged} />

                        <div className="divider-2" />

                        <MultiSelect
                            label="Roles"
                            value={roles}
                            onChange={setRoles}
                            optionsList={Object.values(ROLES)}
                        />

                        {isError ? (
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
                        onClick={closeDialog}
                        title={"Cancel Edit"}
                    >
                        Cancel
                    </button>

                    <button
                        className="button"
                        type="button"
                        onClick={onResetChangesClicked}
                        disabled={!isChanged ? true : false}
                        title="reset changes"
                    >
                        Reset
                    </button>

                    <AsyncButton
                        isLoading={isLoading}
                        className="action-btn"
                        type="submit"
                        onClick={onSaveUserClicked}
                        disabled={(!isChanged || isLoading) ? true : false}
                        title="save changes"
                    >
                        Save
                    </AsyncButton>
                </DialogButtons>
            </form>
        </Dialog>
    )
}

export default EditUserAsAdmin