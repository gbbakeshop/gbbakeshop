import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { delete_ingredients } from "@/services/ingredients-services";
import { useDispatch } from "react-redux";
import { isRandomhandler } from "@/_redux/app-slice";

export default function IngredientsDelete({ data,icons }) {
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
                delete_ingredients(id).then(res=>{
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
                >
                    {icons}
                </button>
            </div>
        </>
    );
}
