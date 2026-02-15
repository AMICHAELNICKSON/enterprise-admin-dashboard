import { useEffect, useState } from "react";
import MetricCard from "../../components/dashboard/MetricCard";
import { getDashboardMetrics } from "../../services/dashboardService";
import type { Metric } from "../../types/dashboard";
import { getDailyUsage, type DailyUsage } from "../../services/analyticsService";
import UsageChart from "../../components/dashboard/UsageChart";
import { getUserDistribution, type UserDistribution } from "../../services/userAnalyticsService";
import UserDistributionChart from "../../components/dashboard/UserDistributionChart";

function Dashboard() {

    const [metrics, setMetrics] = useState<Metric[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [usageData, setUsageData] = useState<DailyUsage[]>([]);
    const [usageLoading, setUsageLoading] = useState(true);
    const [userDistribution, setUserDistribution] = useState<UserDistribution[]>([]);
    const [distributionLoading, setDistributionLoading] = useState(true);

    useEffect(()=>{
        getDashboardMetrics().then((metrics: Metric[])=>{
            setMetrics(metrics);
            setLoading(false);
        })
    },[]);

    useEffect(()=>{
        getDailyUsage().then((data: DailyUsage[])=>{
            setUsageData(data);
            setUsageLoading(false);
        })
    },[])

    useEffect(()=>{
        getUserDistribution().then((data: UserDistribution[])=>{
            setUserDistribution(data);
            setDistributionLoading(false);
        })
    }, [])

    if(loading) {
        return <p className="text-muted">Loading Dashboard ...</p>
    }

    if(!metrics.length) {
        return (
            <>
                <h4 className="mb-3">Dashboard</h4>
                <div className="alert alert-light">
                    No metrics available.
                </div>
            </>
        )
    }

    return (
        <>
            <h4 className="mb-3">Dashboard</h4>
            <section>
                <div className="row g-3">
                    {metrics.map((metric: Metric)=>(
                        <div key={metric.id} className="col-12 col-sm-6 col-lg-3">
                            <MetricCard metric={metric} highlight={metric.id === "errors" ? "danger" : "success"}/>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-5">
                <h5 className="mb-3">Usage Overview</h5>

                {usageLoading ? (
                    <p className="text-muted">Loading analytics...</p>
                ): (
                    <UsageChart data={usageData}/>
                )}
            </section>

            <section className="mt-5">
                <h5 className="mb-3">User Distribution</h5>

                {distributionLoading ? (
                    <p className="text-muted">Loading user analytics...</p>
                ): (
                        <>
                            <UserDistributionChart data={userDistribution} />
                            <p className="text-muted mt-2">
                                Active users currently represent{" "}
                                {Math.round(
                                    ((userDistribution.find(d => d.status === "active")?.count ?? 0) /
                                        (metrics.find(m => m.id === "users")?.value ?? 1)) * 100
                                )}
                                % of total users.
                            </p>
                        </>
                )}
            </section>
        </>
    )
    
}

export default Dashboard;