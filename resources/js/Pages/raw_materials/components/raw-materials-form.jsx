import React, { useRef, useState } from "react";
import Input from "@/_components/input";
import { create_ingredients } from "@/services/ingredients-services";
import { isRandomhandler,isResponseHandler } from "@/_redux/app-slice";
import { useDispatch } from "react-redux";

export default function RawMaterialsForm({ selected, data }) {
    const ref = useRef();
    const [load, setLoad] = useState(false);
    const newData = data.filter((res) => selected.includes(res.id));
    
    const dispatch = useDispatch()
    function submitHandler(e) {
        e.preventDefault();
        setLoad(true); // Set loading state

        const formData = new FormData(ref.current);

        const ingredients = newData.map((res,index)=> ({
            raw_materials:newData[index],
            quantity:formData.get(`quantity_${index}`)
        })) 
        const data = {
            code: formData.get("code"),
            target: formData.get("target"),
            ingredients: ingredients,
        };

        setTimeout(async () => {
            const create = await create_ingredients(data);
            dispatch(isResponseHandler(create));
            if (create.status == "success") {
                ref.current.reset();
            }
            setTimeout(() => {
                setLoad(false)
                dispatch(isRandomhandler())
                dispatch(isResponseHandler([]))
            }, 2000);
        }, 1000);
    }

    return (
        <form
            name="form"
            ref={ref}
            onSubmit={submitHandler}
            className="flex flex-col h-full w-full"
        >
            <Input
                name="code"
                title="Ingredients Code"
                placeholder="Enter ingredients code"
                type="text"
            />
             <Input
                name="target"
                title="Target Pieces"
                placeholder="Enter target pieces"
                type="number"
            />
            <div className="flex-1">
                {newData.map((res, index) => (
                    <div className="flex-none" key={index}>
                        <Input
                            name={`quantity_${index}`} // Use unique names for each quantity input
                            title={res.raw_materials}
                            placeholder="Enter Grams"
                            type="number"
                        />
                    </div>
                ))}
            </div>
            <div className="flex-none">
                {load ? (
                    <button
                        disabled
                        className="flex-none w-full items-center align-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0"
                    >
                        <center>
                            Loading...
                            <div className="spinner"></div>
                        </center>
                    </button>
                ) : (
                    <button className="flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0">
                        SUBMIT
                    </button>
                )}
            </div>
            <br />
        </form>
    );
}
