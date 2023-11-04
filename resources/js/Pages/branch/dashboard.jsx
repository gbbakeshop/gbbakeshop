import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchAnalyticsSearch from "../branch_analytics/components/branch-analytics-search";
import { BranchLineChart } from "../branch_analytics/components/branch-line-chart";
import { BranchBarChart } from "../branch_analytics/components/branch-bar-chart";

export default function BranchDashboardPage(props) {
    const { auth } = props;
    const { url } = usePage();
    const branchid =
        url.split("/")[2] == "bread-report"
            ? auth.user.branchid
            : url.split("/")[2];
    return (
        <BranchLayout 
        position={auth.user.position}
        branchid={branchid}>
            <BranchAnalyticsSearch />
            <div className="flex">
                <div className="w-1/2">
                    <BranchLineChart />
                </div>
                <div className="w-1/2">
                    <BranchBarChart />
                </div>
            </div>
        </BranchLayout>
    );
}
