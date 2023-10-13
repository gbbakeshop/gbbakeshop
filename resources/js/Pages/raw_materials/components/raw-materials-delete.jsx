import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { delete_raw_materials } from "@/services/raw-materials-services";
import { useDispatch } from "react-redux";
import { isRandomhandler } from "@/_redux/app-slice";

export default function RawMaterialsDelete({ data,icons }) {
    const dispatch = useDispatch()

    function openDelete(id) {
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
                delete_raw_materials(id).then(res=>{
                    if(res.status == 'success'){
                        dispatch(isRandomhandler())
                        Swal.fire({
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }else{
                        Swal.fire({
                            icon: "error",
                            title: "Invalid",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                })
              
            }
        });
    }
    return (
        <>
            <div className="relative inline-block text-left">
                <button
                    onClick={() => openDelete(data.id)}
                    type="button"
                    className=" relative flex rounded-full text-sm"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                >
                   {icons}
                </button>
            </div>
        </>
    );
}
