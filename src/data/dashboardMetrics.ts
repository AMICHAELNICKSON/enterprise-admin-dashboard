import type { Metric } from "../types/dashboard";

export const dashboardMetrics: Metric[] = [
    { id: "users", label: "Total Users", value: 1240 },
    { id: "active", label: "Active Users", value: 860 },
    { id: "sessions", label: "Sessions Today", value: 312 },
    { id: "errors", label: "Errors", value: 7 }
]