import { useState } from "react";
import moment from "moment/moment";
import { FaEdit } from "react-icons/fa";
import Drawer from "@/_components/drawer";
import BreadCreateForm from "./bread-create-form";
import BreadEditForm from "./bread-edit-form";
import ActionDrawer from "@/_components/action-drawer";
import BreadDelete from "./bread-delete";
import { create_recipes } from "@/services/recipes-services";
import { useDispatch } from "react-redux";
import { isResponseHandler } from "@/_redux/app-slice";

export default function BreadTableComponent({ data }) {
    const [selected, setSelected] = useState([]);
    const [breadName, setBreadName] = useState([]);
    const [load,setLoad] = useState(false)
    const dispatch = useDispatch()

    function isExistFunction(res) {
        //check if exist
        return selected.find((result) => result === res);
    }

    function addItem(res,bread_name) {
        const isExist = isExistFunction(res);
        if (isExist == undefined) {
            // insert array of object
            setSelected([...selected, res]);
            setBreadName([...breadName,bread_name])
        } else {
            // delete array of object
            const newselected = selected.filter((item) => item !== res);
            const newselected2 = breadName.filter((item) => item !== bread_name);
            setSelected(newselected);
            setBreadName(newselected2)
        }
    }

    async function clickCreateRecipe() {
        setLoad(true)
      
        const data =selected.map((res,index)=>({
            bread_id:res,
            bread_name:breadName[index]
        }))
        
        const create = await create_recipes({
            data:data
        });
        
        dispatch(isResponseHandler(create));
        setTimeout(() => {
            dispatch(isResponseHandler([]))
            setLoad(false)
            setSelected([])
            setBreadName([])
        }, 2000);
    }
    return (
        <div className="bg-white container mx-auto mt-5 rounded-lg overflow-hidden shadow-lg p-10">
            <div className="flex flex-row w-full">
                <div className="flex-1">
                    {selected.length !== 0 && (
                        <>
                        {
                            load?<button disabled className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> 
                            <center>
                                <svg aria-hidden="true" className="align-center justify-center w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </center>
                            </button>:<button onClick={clickCreateRecipe} className="border-2 border-red-500 hover:border-red-600 text-red-500 font-bold py-2 px-4 rounded">
                            CREATE RECIPES
                        </button>
                        }
                        </>
                   
                    )}
                </div>
                <div className="flex-none">
                    <Drawer
                        title="CREATE BREAD"
                        content={<BreadCreateForm />}
                    />
                </div>
            </div>

            <table className="w-full ">
                <thead>
                    <tr className="flex flex-row border-b border-slate-300">
                        <th className="flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            <input
                                disabled
                                type="checkbox"
                                className="bg-gray-500 form-checkbox h-5 w-5 text-red-600"
                            />
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Name of Bread
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Price
                        </th>
                        <th className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Created At
                        </th>
                        <th className=" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Edit
                        </th>
                        <th className=" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody className="text-gray-500  font-normal">
                    {data?.map((res, index) => (
                        <tr
                            key={index}
                            className={`${
                                isExistFunction(res.id) == undefined
                                    ? " border-b border-slate-200 "
                                    : "bg-gray-100 border-l-2 border-red-500"
                            } flex flex-row my-1`}
                        >
                            <td className="flex-none px-6 py-2 whitespace-no-wrap ">
                                <input
                                    checked={
                                        isExistFunction(res.id) !== undefined
                                    }
                                    onChange={() => addItem(res.id,res.bread_name)}
                                    type="checkbox"
                                    className={`${
                                        isExistFunction(res.id) == undefined
                                            ? ""
                                            : "border-red-500 border bg-red-500 text-red-500"
                                    }  form-checkbox h-5 w-5`}
                                />
                            </td>
                            <td className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                                {res.bread_name}
                            </td>
                            <td className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                                {res.price}
                            </td>
                            <td className=" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider">
                                {moment(res.created_at).format("LL")}
                            </td>
                            <td className=" flex-none px-8 py-3 text-left text-sm  text-gray-600 tracking-wider">
                                <ActionDrawer
                                    content={<BreadEditForm data={res} />}
                                    title="Edit Form"
                                    icons={
                                        <FaEdit className="text-xl text-blue-600" />
                                    }
                                />
                            </td>
                            <td className=" flex-none px-8 py-3 text-left text-sm  text-gray-600 tracking-wider">
                                <BreadDelete data={res} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
