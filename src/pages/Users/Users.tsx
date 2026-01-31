import UsersTable from "../../components/users/UsersTable"
import { users } from "../../data/user"

function Users() {

    return(
        <>
            <h5>Users</h5>
            <p className="text-muted">Manage registered users and their access.</p>
            <UsersTable users={users}/>
        </>
    )

}

export default Users