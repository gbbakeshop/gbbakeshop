import TrashIcon from "@/icons/trash-icon";
import Swal from "sweetalert2";
import { delete_account } from "@/services/account-services";
import { isRandomhandler } from "@/_redux/app-slice";
import { useDispatch } from "react-redux";
export default function BranchAccountDelete({ id }) {
    const dispatch = useDispatch()
    function deleteAccount() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                delete_account(id)
                .then((res) => {
                    if (res.status == "success") {
                        dispatch(isRandomhandler())
                        Swal.fire({
                            icon: "success",
                            title: "Your work has been delete",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    } 
                })
                .catch(err=>{
                    Swal.fire({
                        icon: "error",
                        title: "Your work has not been save!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                });
            }
        });
    }
    return (
        <>
            <button onClick={deleteAccount}>
                <TrashIcon />
            </button>
        </>
    );
}
