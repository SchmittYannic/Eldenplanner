import { useState, ChangeEvent, ReactElement, MouseEvent, KeyboardEvent } from "react";
import { ClipLoader } from "react-spinners";
import { ROLES } from "../../config/roles";
import { Checkbox, MultiSelect } from "../../components/ui";
import { UserAsAdminType, useUpdateUserAsAdminMutation } from "./usersAsAdminApiSlice";

type PropsType = {
    user: UserAsAdminType
};

const EditUserAsAdminForm = ({ user }: PropsType): ReactElement => {

    const [updateUserAsAdmin, {
        isLoading,
        isSuccess,
        isError,
    }] = useUpdateUserAsAdminMutation();

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [active, setActive] = useState(user.active);
    const [validated, setValidated] = useState(user.validated);
    const [roles, setRoles] = useState(user.roles);

    const [responseMsg, setResponseMsg] = useState("");

    const onUsernameChanged = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const onEmailChanged = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onActiveChanged = () => setActive(prev => !prev);
    const onValidatedChanged = () => setValidated(prev => !prev);

    const onResetChangesClicked = () => {
        setUsername(user.username);
        setEmail(user.email);
        setActive(user.active);
        setValidated(user.validated);
        setRoles(user.roles);
    };

    const onSaveUserClicked = async (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            const response = await updateUserAsAdmin({ 
                id: user.id,
                username,
                active,
                roles,
                validated,
                email 
            }).unwrap();

            setResponseMsg(response.message);
        }
        catch (err: any) {
            if (!err.status) {
                setResponseMsg("No Server Response");
            } else if (err.status === 400 || err.status === 401 || err.status === 409) {
                setResponseMsg(err.data?.message);
            } else {
                setResponseMsg("an error occured");
            }
        }
    };

    const isChanged = username !== user.username 
        || email !== user.email 
        || active !== user.active 
        || validated !== user.validated 
        || roles !== user.roles;

    return (
        <main className="editasadminpage">
            <form
                className="editasadmin--form"
                action="patch"
            >
                <div className="editasadmin--input-wrapper username">
                    <label htmlFor="editasadmin-username">Username</label>
                    <div className="divider-1" />
                    <input 
                        id="editasadmin-username"
                        type="text"
                        value={username}
                        onChange={onUsernameChanged}
                        autoComplete="off"
                    />
                </div>

                <div className="divider-4" />

                <div className="editasadmin--input-wrapper email">
                    <label htmlFor="editasadmin-email">Email</label>
                    <div className="divider-1" />
                    <input
                        id="editasadmin-email"
                        type="email"
                        value={email}
                        onChange={onEmailChanged}
                        autoComplete="off"
                    />
                </div>

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

                <button
                    className="button"
                    type="button"
                    onClick={onResetChangesClicked}
                    disabled={!isChanged ? true : false}
                >
                    Reset
                </button>

                <button
                    className="action-btn full"
                    type="submit"
                    onClick={onSaveUserClicked}
                    disabled={(!isChanged || isLoading) ? true : false}
                >
                    {!isLoading ? "Save" :
                        <ClipLoader
                            color={"rgb(231, 214, 182)"}
                            loading={isLoading}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    }
                </button>

                <div className="divider-4" />

                {isSuccess && (
                    <div className="sm-alert succmsg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{responseMsg}</span>
                    </div>
                )}

                {isError && (
                    <div className="sm-alert errmsg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>{responseMsg}</span>
                    </div>
                )}
            </form>
        </main>
    )
}

export default EditUserAsAdminForm