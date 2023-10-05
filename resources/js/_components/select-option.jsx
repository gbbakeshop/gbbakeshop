import { useState } from "react";
export default function SelectOption({ data, list, id, name }) {
    const [value, setValue] = useState(null);
    return (
        <>
            <select
                onChange={(e) => setValue(e.target.value)}
                name={name}
                required
                className={` appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
            >
                 <option  value={id}>
                        {data}
                    </option>
                {list.map((res, index) => (
                    <option key={index} value={res.id}>
                        {res.raw_materials}
                    </option>
                ))}
            </select>
        </>
    );
}
