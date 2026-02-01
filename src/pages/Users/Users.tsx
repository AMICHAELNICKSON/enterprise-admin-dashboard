import { useEffect, useState } from "react"
import UsersTable from "../../components/users/UsersTable"
import { getUsers } from "../../services/userService"
import type { User } from "../../types/user";

function Users() {
    const [allUsers, setAllUsers] = useState<User[]>(() => getUsers());
    const [visibleUsers, setVisibleUsers] = useState<User[]>(allUsers);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 5;
    const paginatedUsers = visibleUsers.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const totalPages = Math.max(1, Math.ceil(visibleUsers.length / pageSize)); 

    useEffect(() => {
        let filteredUsers = filterUsersBySearch(allUsers, searchTerm);
        filteredUsers = filterUsersByStatus(filteredUsers, statusFilter);
        setVisibleUsers(filteredUsers);
    }, [searchTerm, statusFilter, allUsers])

    const filterUsersBySearch = (users: User[], term: string) => {
        if (!term) return users;

        const lowerTerm = term.toLowerCase();

        return users.filter((user: User) =>
            user.name.toLowerCase().includes(lowerTerm) ||
            user.email.toLowerCase().includes(lowerTerm)
        )
    }

    const filterUsersByStatus = (users: User[], status: string) => {
        if (status === "all") return users
        return users.filter((user: User) => user.status === status)
    }

    const handleDelete = (id: string) => {
        if (!window.confirm("Are you sure want to delete this user?")) {
            return;
        }
        const updatedUsers = allUsers.filter((user) => user.id !== id)
        setAllUsers(updatedUsers);
        if ((currentPage - 1) * pageSize >= updatedUsers.length) {
            setCurrentPage((prevPage) => Math.max(1, prevPage - 1))
        }
    }

    return (
        <>
            <h5>Users</h5>
            <p className="text-muted">Manage registered users and their access.</p>
            <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name or email"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setCurrentPage(1)
                    }}
                />
                <select
                    className="form-select"
                    style={{ maxWidth: 180 }}
                    value={statusFilter}
                    onChange={(e) => {
                        setStatusFilter(e.target.value as any)
                        setCurrentPage(1)
                    }}
                >
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            <UsersTable users={paginatedUsers} onDelete={handleDelete} />
            <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="text-muted">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className="btn btn-sm btn-outline-secondary"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
                >
                    Previous
                </button>
                <button
                    className="btn btn-sm btn-outline-secondary"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                >
                    Next
                </button>
            </div>
        </>
    )

}

export default Users