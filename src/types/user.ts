export type UserStatus = "active" | "inactive"

export type User = {
    id: string;
    name: string;
    email: string;
    role: "admin" | "user";
    status: UserStatus;
    createdAt: string;
}