import ActionDrawer from "@/_components/action-drawer";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";

export default function IngredientsShow({ data }) {
    return (
        <ActionDrawer
            icons={<BiSolidShow className="text-2xl text-blue-600" />}
            title="SHOW INGREDIENTS"
            content={
                <>
                    <ul className="w-full">
                        {data?.map((res, i) => (
                            <div key={i}>
                                <li
                                    className="text-red-500 font-black w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50"
                                >
                                    CODE: {res.code}
                                </li>
                                <li
                                    className="text-red-500 font-black w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50"
                                >
                                    TARGET PIECES : {res.target}
                                </li>
                                {res.selected_ingredients.map(
                                    (result, index) => (
                                        <li
                                            key={index}
                                            className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50"
                                        >
                                            {result.raw_materials}
                                        </li>
                                    )
                                )}
                            </div>
                        ))}
                    </ul>
                </>
            }
        />
    );
}
