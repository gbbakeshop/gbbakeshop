import ActionDrawer from "@/_components/action-drawer";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";

export default function IngredientsShow({ data,icons }) {
  
    return (
        <ActionDrawer
            icons={icons}
            title="SHOW INGREDIENTS"
            content={
                <>
                    <ul className="w-full">
                        <li className="text-red-500 font-black w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                            CODE: {data.code}
                        </li>
                        <li className="text-red-500 font-black w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                            TARGET PIECES : {data.target}
                        </li>
                        {data.selected_ingredients.map((result, index) => (
                            <li
                                key={index}
                                className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50"
                            >
                                {result.raw_materials}
                            </li>
                        ))}
                    </ul>
                </>
            }
        />
    );
}
