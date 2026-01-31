import type { User } from "../types/user";

export const users: User[] = [
    {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        role: "admin",
        status: "active",
        createdAt: "2025-01-10",
    },
    {
        id: "2",
        name: "Jane Smith",
        email: "jane@example.com",
        role: "user",
        status: "inactive",
        createdAt: "2025-01-12",
    },
    {
        id: "3",
        name: "Alex Brown",
        email: "alex@example.com",
        role: "user",
        status: "active",
        createdAt: "2025-01-15",
    }
]