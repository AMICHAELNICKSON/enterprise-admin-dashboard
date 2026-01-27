import MetricCard from "../../components/dashboard/MetricCard";
import { dashboardMetrics } from "../../data/dashboardMetrics";
import type { Metric } from "../../types/dashboard";

function Dashboard() {

    return (
        <>
            <h4 className="mb-3">Dashboard</h4>
            <div className="row g-3">
                {dashboardMetrics.map((metric: Metric)=>(
                    <div key={metric.id} className="col-12 col-sm-6 col-lg-3">
                        <MetricCard metric={metric}/>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Dashboard;