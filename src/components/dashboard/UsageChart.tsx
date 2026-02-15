import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import type { DailyUsage } from "../../services/analyticsService"

type Props = {
    data: DailyUsage[]
}

function UsageChart({data}: Props) {

    if(!data.length) {
        return (
            <div className="text-muted text-center p-4">
                No usage data available
            </div>
        )
    }

    return (
        <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis 
                        dataKey="date"
                        tickFormatter={(value) => 
                            new Date(value).toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric"
                            })
                        }
                    />
                    <YAxis/>
                    <Tooltip/>
                    <Line
                        type="monotone"
                        dataKey="sessions"
                        stroke="#0d6efd"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )

}

export default UsageChart