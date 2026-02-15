import type { Metric } from "../types/dashboard"
import { getUsers } from "./userService";

export const getDashboardMetrics = (): Promise<Metric[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = getUsers();

            const metrics = [
                { 
                    id: "users", 
                    label: "Total Users", 
                    value: users.length 
                },
                { 
                    id: "active", 
                    label: "Active Users", 
                    value: users.filter((users) => users.status === "active").length
                },
                { 
                    id: "sessions", 
                    label: "Sessions Today", 
                    value: 312 
                },
                { 
                    id: "errors", 
                    label: "Errors", 
                    value: 7
                }
            ]

            resolve(metrics)
        }, 3000);
    })
}