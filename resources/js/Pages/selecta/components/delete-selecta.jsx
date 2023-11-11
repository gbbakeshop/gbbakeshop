import { isRandomhandler } from "@/_redux/app-slice";
import TrashIcon from "@/icons/trash-icon";
import { delete_selecta } from "@/services/selecta-services";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
export default  function DeleteSelecta({id}) {
const dispatch = useDispatch()
    function deleteHandler(ids) {
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
                delete_selecta(ids).then((res) => {
                    if (res.status == "success") {
                        dispatch(isRandomhandler());
                        Swal.fire({
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Invalid",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
            }
        });
    }
    return ( 
        <>
      <button onClick={()=>deleteHandler(id)}>
      <TrashIcon />
      </button>
        </>
     );
}

