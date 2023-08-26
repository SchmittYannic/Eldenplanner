import { useState, ChangeEvent, ReactElement } from "react";
import { UserAsAdminType, useUpdateUserMutation } from "./usersApiSlice";
import { ROLES } from "../../config/roles";
import { isCustomError } from "../../app/api/apiSlice";

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
    }

    const onSaveUserClicked = async () => {
        await updateUser({ 
            id: user.id,
            username,
            active,
            roles,
            validated,
            email 
        })
    }

    const options = Object.values(ROLES).map(role => {
        return (
            <option
                key={role}
                value={role}

            > {role}</option >
        )
    })

    console.log(isError)
    console.log(error)

    const errContent = error === undefined ? "" : isCustomError(error) ? error.data.message : "An Error occured"

    return (
        <form action="">
            <p>{errContent}</p>
            <input 
                type="text"
                value={username}
                onChange={onUsernameChanged}
            />
            <input 
                type="email"
                value={email}
                onChange={onEmailChanged}
            />
            <input
                type="checkbox"
                checked={active}
                onChange={onActiveChanged}
            />
            <input
                type="checkbox"
                checked={validated}
                onChange={onValidatedChanged}
            />
            <select
                multiple={true}
                size={3}
                value={roles}
                onChange={onRolesChanged}
            >
                {options}
            </select>
            <button type="button" onClick={onSaveUserClicked}>
                Save
            </button>
        </form>
    )
}

export default EditUserAsAdminForm