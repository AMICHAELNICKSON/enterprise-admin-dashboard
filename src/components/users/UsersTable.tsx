import type { User } from "../../types/user";
import StatusBadge from "../common/StatusBadge";

type UserTableProps = {
    users: User[];
    onDelete: (id: string) => void;
}

function UsersTable({ users, onDelete }: UserTableProps) {

    if (users.length === 0) {
        return (
            <div className="alert alert-light mt-3 text-center">
                No users available.
            </div>
        )
    }

    return (
        <div className="table-response">
            <table>
                <caption className="text-muted">
                    List of registered users
                </caption>
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
                    {users.map((user: User) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className="text-capitalize">{user.role}</td>
                            <td>
                                <StatusBadge status={user.status} />
                            </td>
                            <td>{user.createdAt}</td>
                            <td>
                                <div className="d-flex gap-2">
                                    <button className="btn btn-sm btn-outline-primary">
                                        Edit
                                    </button>
                                    <button className="btn btn-sm btn-danger" onClick={() => onDelete(user.id)}>
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export default UsersTable