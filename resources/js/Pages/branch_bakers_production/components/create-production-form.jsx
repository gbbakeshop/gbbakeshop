import { get_all_ingredients } from "@/services/ingredients-services";
import { useState, useEffect, useRef } from "react";
import { create_new_records } from "@/services/records-services";
import { useDispatch } from "react-redux";
import Input from "@/_components/input";
import {
    isResponseHandler,
    isRandomhandler,
    isResetForm,
} from "@/_redux/app-slice";
export default function CreateProductionForm({
    data,
    branchid,
    account,
    data2,
}) {
    const ref = useRef();
    const [ingredients, setIngredients] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [load, setLoad] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const dispatch = useDispatch();

    const id = data?.selected_ingredients?.map((res) =>
        parseInt(res.raw_materials_id)
    );
    // const rm = data2.filter((res) => id.includes(res.raw_materials_id));
    const si = data.selected_ingredients.map((res, i) => ({
        ...res,
        raw_materials_id: parseInt(res.raw_materials_id),
        raw_materials: res.raw_materials,
        grams: parseInt(res.quantity),
    }));
    const newData = si.map((res, index) => ({
        bind: data2.find(
            (result) => result.raw_materials_id == res.raw_materials_id
        ).bind,
        branchid: res.branchid,
        raw_materials_id: si.find(
            (result) => result.raw_materials_id == res.raw_materials_id
        ).raw_materials_id,
        quantity: data2.find(
            (result) => result.raw_materials_id == res.raw_materials_id
        ).quantity,
        raw_materials: si.find(
            (result) => result.raw_materials_id == res.raw_materials_id
        ).raw_materials,
        grams: si.find(
            (result) => result.raw_materials_id == si[index].raw_materials_id
        ).grams,
    }));
    // const array1 = rm.map((res, i) => res.raw_materials_id);
    // const array2 = si.map((res, i) => res.raw_materials_id);
    // const commonNumbers = array1.filter(item => array2.includes(item)).sort((a, b) => a - b);
    // const newData = rm.map((res, i) => ({ ...res, ...si[i] }));

    useEffect(() => {
        const hasNagative = newData?.map(
            (res) => res.quantity - (res.grams * quantity) / 1000 <= 0
        );
        if (hasNagative) {
            if (hasNagative?.includes(true)) {
                setDisabled(true);
            } else {
                setDisabled(false);
            }
        }
    }, [quantity]);

    useEffect(() => {
        get_all_ingredients().then((res) => {
            setIngredients(res.status);
        });
    }, []);
    async function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData(ref.current);
        setLoad(true);
        if (quantity > 0) {
            const subData = {
                quantity: quantity,
                branchid: branchid,
                account: account,
                data: data,
            };

            const ingredients = data?.selected_breads.map((res, index) => ({
                quantity: formData.get(`quantity_${index}`),
            }));

            const newData = {
                ...subData,
                data: {
                    ...subData.data,
                    selected_breads: subData.data.selected_breads.map(
                        (res, index) => ({
                            ...res,
                            ...ingredients[index],
                        })
                    ),
                },
            };
            setTimeout(async () => {
                const create = await create_new_records(newData);

                dispatch(isResponseHandler(create));
                setTimeout(() => {
                    setLoad(false);
                    dispatch(isResetForm(false));
                    dispatch(isRandomhandler());
                    dispatch(isResponseHandler([]));
                }, 2000);
            }, 1000);
        } else {
            setLoad(false);
            alert("Insufficient Quantity");
        }
    }

    return (
        <form
            name="form"
            ref={ref}
            onSubmit={submitHandler}
            className="flex flex-col h-full w-full"
        >
            <div className="flex-1">
                <>
                    <div className="flex flex-col gap-1">
                        {data?.selected_breads.map((res, index) => (
                            <div className="flex-1" key={index}>
                                {res.bread_name}
                                <Input
                                    name={`quantity_${index}`} // Use unique names for each quantity input
                                    title={res.raw_materials}
                                    placeholder="Pieces"
                                    type="number"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-rows-1 grid-flow-col gap-1 text-lg font-semibold">
                        Raw Materials - Target Pieces ({data.target * quantity})
                    </div>
                    {data?.selected_ingredients.length == 0 ? (
                        <h5 className=" text-base font-semibold text-red-500 dark:text-red-400">
                            No Ingredients designated!
                        </h5>
                    ) : (
                        <div className="grid grid-rows-1 grid-flow-col gap-1">
                            <div className="flex flex-col">
                                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                                    <div className="px-1">
                                        <div>
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                Quantity
                                            </label>
                                            <input
                                                defaultValue={1}
                                                required
                                                onInput={(e) =>
                                                    setQuantity(e.target.value)
                                                }
                                                className={`${
                                                    quantity == "" ||
                                                    quantity == null
                                                        ? "border-red-500"
                                                        : ""
                                                } appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                                type="number"
                                                placeholder="Number"
                                            />
                                        </div>
                                    </div>
                                    <div className="py-2 inline-block min-w-full">
                                        <div className="overflow-hidden">
                                            <table className="min-w-full">
                                                <thead className="bg-white border-b">
                                                    <tr>
                                                        <th
                                                            scope="col"
                                                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                        >
                                                            Raw Materials
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                        >
                                                            Grams
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                        >
                                                            Current Remaining
                                                        </th>
                                                        <th
                                                            scope="col"
                                                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                        >
                                                            Calculation
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {newData.map(
                                                        (res, index) => (
                                                            <tr
                                                                key={index}
                                                                className="bg-gray-100 border-b"
                                                            >
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                    {
                                                                        res.raw_materials
                                                                    }
                                                                </td>
                                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                    {res.grams *
                                                                        quantity}
                                                                </td>
                                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                    {
                                                                        res.quantity
                                                                    }
                                                                </td>
                                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                    {(
                                                                        res.quantity -
                                                                        (res.grams *
                                                                            quantity) /
                                                                            1000
                                                                    ).toFixed(
                                                                        2
                                                                    ) <= 0 ? (
                                                                        <span className="bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                                                            {(
                                                                                res.quantity -
                                                                                (res.grams *
                                                                                    quantity) /
                                                                                    1000
                                                                            ).toFixed(
                                                                                2
                                                                            )}
                                                                        </span>
                                                                    ) : (
                                                                        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                                                            {(
                                                                                res.quantity -
                                                                                (res.grams *
                                                                                    quantity) /
                                                                                    1000
                                                                            ).toFixed(
                                                                                2
                                                                            )}
                                                                        </span>
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
                <br />
            </div>
            {load ? (
                <button
                    disabled
                    className="flex-none w-full items-center align-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0"
                >
                    <center>
                        <svg
                            aria-hidden="true"
                            className="align-center justify-center w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                    </center>
                </button>
            ) : (
                <button
                    disabled={disabled}
                    className="flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0"
                >
                    {disabled ? "No Supplies" : "CREATE NEW PRODUCTION"}
                </button>
            )}
            <br />
        </form>
    );
}
