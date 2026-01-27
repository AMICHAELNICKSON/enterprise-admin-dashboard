import type { Metric } from "../../types/dashboard"

type MetricCardProps = {
    metric: Metric
}

function MetricCard({metric}: MetricCardProps) {

    return (
        <div className="card h-100">
            <div className="card-body">
                <h6 className="card-title text-muted">
                    {metric.label}
                </h6>
                <h3 className="card-text">
                    {metric.value}
                </h3>
            </div>
        </div>
    )

}

export default MetricCard