import { useState } from "react"
import type { User, UserStatus } from "../../types/user";

type Props = {
    user: User | null;
    onClose: () => void;
    onSave: (updatedUser: User) => void;
}

function EditUserModal({user, onClose, onSave}: Props) {

    const [name, setName] = useState<string>(user?.name ?? "");
    const [status, setStatus] = useState<UserStatus>(user?.status ?? "active");

    if(!user) return null;

    return (
        <div className="modal d-block bg-dark bg-opacity-50">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit User</h5>
                        <button className="btn-close" onClick={onClose}/>
                    </div>

                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Status</label>
                            <select
                                className="form-select"
                                value={status}
                                onChange={(e) => setStatus(e.target.value as any)}
                            >
                                <option value="active">Active</option>
                                <option value="inactive">InActive</option>
                            </select>
                        </div>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={onClose}>
                            Cancel
                        </button>
                        <button className="btn btn-secondary" onClick={() => onSave({...user, name, status})}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default EditUserModal