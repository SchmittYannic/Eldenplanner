import { useState, ChangeEvent, ReactElement } from "react";
import { UserAsAdminType, useUpdateUserMutation } from "./usersApiSlice";
import { ROLES } from "../../config/roles";
import { isCustomError } from "../../app/api/apiSlice";
import { Checkbox } from "../../components/ui";

type PropsType = {
    user: UserAsAdminType
}

const EditUserAsAdminForm = ({ user }: PropsType): ReactElement => {
    
    const [updateUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useUpdateUserMutation();

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [active, setActive] = useState(user.active);
    const [validated, setValidated] = useState(user.validated);
    const [roles, setRoles] = useState(user.roles)

    const onUsernameChanged = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const onEmailChanged = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onActiveChanged = () => setActive(prev => !prev);
    const onValidatedChanged = () => setValidated(prev => !prev);

    const onRolesChanged = (e: ChangeEvent<HTMLSelectElement>) => {
        const values = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        )
        setRoles(values)
    };

    const onResetChangesClicked = () => {
        setUsername(user.username);
        setEmail(user.email);
        setActive(user.active);
        setValidated(user.validated);
        setRoles(user.roles);
    };

    const onSaveUserClicked = async () => {
        await updateUser({ 
            id: user.id,
            username,
            active,
            roles,
            validated,
            email 
        })
    };

    const options = Object.values(ROLES).map(role => {
        return (
            <option
                key={role}
                value={role}

            > {role}</option >
        )
    });

    const isChanged = username !== user.username 
        || email !== user.email 
        || active !== user.active 
        || validated !== user.validated 
        || roles !== user.roles;

    console.log(isError)
    console.log(error)

    const errContent = error === undefined ? "" : isCustomError(error) ? error.data.message : "An Error occured"

    return (
        <main className="editasadminpage">
            <form
                className="editasadmin--form"
                action="patch"
            >
                <p>{errContent}</p>
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

                <div className="divider-4" />

                <Checkbox label="Active" checked={active} setChecked={onActiveChanged} />

                <div className="divider-2" />

                <Checkbox label="Validated" checked={validated} setChecked={onValidatedChanged} />
                <select
                    multiple={true}
                    size={3}
                    value={roles}
                    onChange={onRolesChanged}
                >
                    {options}
                </select>
                <button
                    className="button"
                    type="button"
                    onClick={onResetChangesClicked}
                    disabled={!isChanged ? true : false}
                >
                    Reset
                </button>
                <button
                    className="action-btn"
                    type="button"
                    onClick={onSaveUserClicked}
                    disabled={!isChanged ? true : false}
                >
                    Save
                </button>
            </form>
        </main>
    )
}

export default EditUserAsAdminForm