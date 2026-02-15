import type { Metric } from "../../types/dashboard"

type MetricCardProps = {
    metric: Metric,
    highlight: string
}

function MetricCard({metric, highlight}: MetricCardProps) {

    const colorClass: string = highlight === "success"
                            ? "text-success"
                            : highlight === "danger"
                            ? "text-danger"
                            : ""

    return (
        <div className="card h-100">
            <div className="card-body">
                <h6 className="card-title text-muted">
                    {metric.label}
                </h6>
                <h3 className={`mt ${colorClass}`}>
                    {metric.value}
                </h3>
            </div>
        </div>
    )

}

export default MetricCard