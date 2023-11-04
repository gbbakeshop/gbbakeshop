import { useDispatch } from "react-redux";
import { setPeriod } from "../_redux/branch-analytics-slice";

export default function BranchAnalyticsSearch() {
    const dispatch = useDispatch()
    function selectPeriod(e) {
        dispatch(setPeriod(e.target.value))
    }
    return (
        <div onInput={selectPeriod} className=" inset-y-0 right-0 flex items-center">
            <select className="h-full rounded-md border-1 bg-transparent py-2 w-1/4 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm">
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Annually">Annually</option>
            </select>
        </div>
    );
}
