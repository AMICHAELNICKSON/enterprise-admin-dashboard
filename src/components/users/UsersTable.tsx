import type { User } from "../../types/user";

type UserTableProps = {
    users: User[]
}

function UsersTable({users}: UserTableProps) {
    
    if(users.length === 0) {
        return(
            <div className="text-muted mt-3">
                No Users Found
            </div>
        )
    }

    return(
        <div className="table-response">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User)=>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className="text-capitalize">{user.role}</td>
                            <td>
                                <span
                                    className={`badge ${user.status === "active"
                                        ? "bg-success"
                                        : "bg-secondary"
                                    }`}
                                >
                                    {user.status}
                                </span>
                            </td>
                            <td>{user.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default UsersTable