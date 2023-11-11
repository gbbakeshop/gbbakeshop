import React, { useState, useEffect } from "react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchSelectaTableComponent from "../branch_selecta/components/branch-selecta-table";
import { get_branch_selecta, get_branch_selecta_history } from "@/services/selecta-services";
import { usePage } from "@inertiajs/react";
import SkeletonLoader from "@/_components/skeleton-loader";
import Search from "@/_components/search";
import SelectaTabs from "./components/selecta-tabs";
import Breadcrumbs from "@/_components/bread-crumbs";
import { useDispatch, useSelector } from "react-redux";
import { setHistory } from "../branch_selecta/_redux/branch-selecta-slice";
import moment from "moment";
import BranchSelectaHistoryTableComponent from "../branch_selecta/components/branch-selecta-history-table";
import BranchSelectaSearchDateHistory from "../branch_selecta/components/branch-selecta-search-date-history";

export default function BranchSelectaHistory(props) {
    const { auth } = props;
    const branchid = auth.user.branchid;
    const [data, setData] = useState([]);
    const { url } = usePage();
    const [loading, setLoading] = useState(true);
    const [newData, setNewData] = useState([]);
    const { refresh } = useSelector((state) => state.app);
    const { history } = useSelector((state) => state.branchSelecta);
    const [search, setSearch] = useState("");
    const dispatch = useDispatch()

    useEffect(() => {
        get_branch_selecta_history({
            date:moment().format('L'),
            branchid:branchid,
        }).then((res) => {
            dispatch(setHistory(res));
            setLoading(false);
        });
    }, [refresh]);

    
    useEffect(() => {
        const value = data.filter((obj) =>
            obj.product_name.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search]);
    return (
        <BranchLayout 
        position={auth.user.position}
         branchid={auth.user.branchid} >
            <Breadcrumbs branchid={auth.user.branchid} />
            <div className="flex gap-4">
                    <div className="flex-none">
                    <BranchSelectaSearchDateHistory  branchid={auth.user.branchid}/>
                    </div>
                    <div className="flex-1">
                    {/* <Search search={search} setSearch={setSearch} />  */}
                    </div>
                </div>
             <SelectaTabs  branchid={auth.user.branchid}/>
            {loading ? (
                <SkeletonLoader />
            ) : (
                <BranchSelectaHistoryTableComponent
                userid={props.auth.user.id}
                    data={search == "" ? history : newData}
                />
            )}
        </BranchLayout>
    );
}
