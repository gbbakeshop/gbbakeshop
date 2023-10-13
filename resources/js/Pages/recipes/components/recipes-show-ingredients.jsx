import ActionDrawer from "@/_components/action-drawer";
import { MdCreateNewFolder } from "react-icons/md";


export default function RecipeShowIngredients({ data,icons }) {

    
    return (
        <>
            <ActionDrawer
                data={data}
                content={
                    <div>
                        <div className="grid grid-rows-6 grid-flow-col gap-1">
                            {data?.selected_breads.map((data, index) => (
                                <div
                                    key={index}
                                    className="flex-none text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded"
                                >
                                    {data.bread_name}
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-rows-1 grid-flow-col gap-1 text-lg font-semibold">
                           RECIPES
                        </div>
                        {data?.selected_ingredients.length == 0 ? (
                            <h5 className=" text-base font-semibold text-red-500 dark:text-red-400">
                                No Ingredients designated!
                            </h5>
                        ) : (
                            <div className="grid grid-rows-6 grid-flow-col gap-1">
                                {data?.selected_ingredients.map(
                                    (data, index) => (
                                        <div
                                            key={index}
                                            className="flex-none text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded"
                                        >
                                            {data.raw_materials} - ({data.quantity}gm)
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>
                }
                title={"BREAD LIST "}
                icons={icons}
            />
        </>
    );
}
