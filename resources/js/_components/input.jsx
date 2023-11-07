import { useState } from "react";

export default function Input({ data,title, type, placeholder,name }) {
    const [value, setValue] = useState(null);

    return (
        <>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {title}
            </label>
            <input
                step="any"
                name={name}
                defaultValue={data}
                required
                onInput={(e) => setValue(e.target.value)}
                className={`${value == "" || value == null?'border-red-500':''} appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                type={type}
                placeholder={placeholder}
            />
            {value == "" && (
                <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                </p>
            )}
        </>
    );
}
