import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import type { UserDistribution } from "../../services/userAnalyticsService"

type Props = {
    data: UserDistribution[]
}

function UserDistributionChart({data}: Props) {

    if(!data.length) {
        return (
            <div className="text-muted text-center p-4">
                No User Distribution Data
            </div>
        )
    }

    return (
        <div style={{width: "100%", height: 300}}>
            <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="status"/>
                    <YAxis allowDecimals={false} />
                    <Tooltip/>
                    <Bar dataKey="count" fill="#198754"/> 
                </BarChart>
            </ResponsiveContainer>
        </div>
    )

}

export default UserDistributionChart