export type DailyUsage = {
    date: string,
    sessions: number
}

export const getDailyUsage = (): Promise<DailyUsage[]> => {

    return new Promise((resolve) => {
        setTimeout(() => {
            const data = [
                { date: "2026-02-01", sessions: 220 },
                { date: "2026-02-02", sessions: 260 },
                { date: "2026-02-03", sessions: 240 },
                { date: "2026-02-04", sessions: 300 },
                { date: "2026-02-05", sessions: 312 },
            ]
            resolve(data)
        }, 2000);
    })

}