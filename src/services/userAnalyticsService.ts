import { getUsers } from "./userService";

export type UserDistribution = {
    status: "active" | "inactive",
    count: number
}

export const getUserDistribution = (): Promise<UserDistribution[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = getUsers();

            const activeUsersCount = users.filter(user => user.status === "active").length;
            const inActiveUsersCount = users.filter(user => user.status === "inactive").length;

            resolve([
                {status: "active", count: activeUsersCount},
                {status: "inactive", count: inActiveUsersCount}
            ])

        }, 1000);
    }) 
    
}