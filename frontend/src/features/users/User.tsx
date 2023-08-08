import React from 'react'
import { UserType } from './usersApiSlice'

const User = ({ user }: { user: UserType}) => {

    console.log(user.active)

    if (user) {
        return (
            <tr className="table__row user">
                <td className={`table__cell`}>{user.username}</td>
                <td className={`table__cell`}>{user.email}</td>
                <td className={`table__cell`}>{user.roles.join(", ")}</td>
                <td className={`table__cell`}>{user.active.toString()}</td>
                <td className={`table__cell`}>{user.validated.toString()}</td>
                <td className={`table__cell`}>{user.createdAt}</td>
                <td className={`table__cell`}>{user.updatedAt}</td>
            </tr>
        )
    } else return null
}

export default User