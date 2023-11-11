import React, { useState, useEffect } from "react";
import BranchLayout from "@/Layouts/branch-layout";
import BranchSelectaTableComponent from "../branch_selecta/components/branch-selecta-table";
import { get_branch_selecta, get_branch_selecta_records } from "@/services/selecta-services";
import { usePage } from "@inertiajs/react";
import SkeletonLoader from "@/_components/skeleton-loader";
import Search from "@/_components/search";
import SelectaTabs from "./components/selecta-tabs";
import Breadcrumbs from "@/_components/bread-crumbs";
import BranchSelectaSearchDate from "../branch_selecta/components/branch-selecta-search-date";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import BranchSelectaRecordsTableComponent from "../branch_selecta/components/branch-selecta-records-table";
import { setRecord } from "../branch_selecta/_redux/branch-selecta-slice";

export default function BranchSelectaRecords(props) {
    const branchid = props.auth.user.branchid;
    const [loading, setLoading] = useState(true);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    const { refresh } = useSelector((state) => state.app);
    const { records } = useSelector((state) => state.branchSelecta);
    const dispatch = useDispatch()

    useEffect(() => {
        get_branch_selecta_records({
            date:moment().format('L'),
            branchid:branchid,
        }).then((res) => {
            dispatch(setRecord(res));
            setLoading(false);
        });
    }, [refresh]);


    useEffect(() => {
        const value = records.filter((obj) =>
            obj.selecta.product_name?.toLowerCase().includes(search?.toLowerCase())
        );
        setNewData(value);
    }, [search,refresh]);

    return (
        <BranchLayout 
        position={props.auth.user.position}
         branchid={props.auth.user.branchid} >
              <Breadcrumbs branchid={props.auth.user.branchid} />
             <div className="flex gap-4">
                    <div className="flex-none">
                    <BranchSelectaSearchDate branchid={props.auth.user.branchid} />
                    </div>
                    <div className="flex-1">
                    <Search search={search} setSearch={setSearch} /> 
                    </div>
                </div>
             <SelectaTabs  branchid={props.auth.user.branchid}/>
           
              {loading ? (
                    <SkeletonLoader />
                ) : (
                    <BranchSelectaRecordsTableComponent
                        userid={props.auth.user.id}
                        data={search == "" ? records : newData}
                    />
                )}
        </BranchLayout>
    );
}
