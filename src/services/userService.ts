import { users } from "../data/user"
import type { User } from "../types/user"

export const getUsers = (): User[] => {
    return users
}