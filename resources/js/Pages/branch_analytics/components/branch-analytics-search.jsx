export default function BranchAnalyticsSearch() {
    return (
        <div className=" inset-y-0 right-0 flex items-center">
            <select className="h-full rounded-md border-1 bg-transparent py-2 w-1/4 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Annually</option>
            </select>
        </div>
    );
}
