import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ActionDrawer from "@/_components/action-drawer";
import BranchRawMaterialsUpdateForm from "./branch-raw-materials-update-form";
export default function BranchRawMaterialsUpdate({data,icons}) {
    return (
        <>
            <ActionDrawer
                content={<BranchRawMaterialsUpdateForm data={data} />}
                title="Edit Raw Materials"
                icons={icons}
            />
        </>
    );
}
