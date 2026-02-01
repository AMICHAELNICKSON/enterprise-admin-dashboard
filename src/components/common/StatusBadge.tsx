import type { UserStatus } from "../../types/user"

type Props = {
    status: UserStatus
}

function StatusBadge({status}: Props) {

    return(
        <span
            className={`badge ${status === "active"
                ? "bg-success"
                : "bg-secondary"
                }`}
        >
            {status}
        </span>
    )

}

export default StatusBadge