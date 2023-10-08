import { useState, useRef } from "react";
import Input from "@/_components/input";
import { useDispatch } from "react-redux";
import { isResponseHandler } from "@/_redux/app-slice";
import { isResetForm } from "@/_redux/app-slice";
import { isRandomhandler } from "@/_redux/app-slice";
import { move_sales_records } from "@/services/records-services";
import { usePage } from "@inertiajs/react";
import moment from "moment";

export default function MoveToSalesReportForm({ data, account }) {
    const { url } = usePage();
    const [load, setLoad] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const branchid = url.split("/")[2];

    async function submitHandler(e) {
        e.preventDefault();
        const formData = new FormData(ref.current);
        setLoad(true);
        const { get_breads, ...resp } = data;
        const newData = {
            ...resp,
            sellerid: account.id,
            beginning: data.beginning ?? 0,
            remaining: parseInt(formData.get("remaining")),
            soldout:(data.total - parseInt(formData.get("remaining"))) -  parseInt(formData.get("breadout")),
            sales:((data.total - parseInt(formData.get("remaining"))) -  parseInt(formData.get("breadout"))) * data.get_breads.price,
            bread_out: formData.get("breadout"),
            remarks2: formData.get("remarks"),
            overs: data.overs ?? 0,
            price: parseInt(data.get_breads.price),
            total: (data.beginning ?? 0) + (data.new_production ?? 0),
            status: "done",
            date: moment().format("LLLL"),
        };

        console.log('newData',newData)

        const update = await move_sales_records(newData);

        dispatch(isResponseHandler(update));
        if (update.status == "success") {
            ref.current.reset();
            dispatch(isResetForm(false));
        }
        setTimeout(() => {
            setLoad(false);
            dispatch(isRandomhandler());
            dispatch(isResponseHandler([]));
            setSelected([]);
        }, 2000);
    }

    return (
        <form
            name="form"
            ref={ref}
            onSubmit={submitHandler}
            className="flex flex-col h-full w-full"
        >
            <div className="flex-1">
                <label className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2">
                    {data.bread_name}
                </label>
                <Input
                    data={0}
                    name="remaining"
                    title={"Remaining"}
                    placeholder="Enter remaining"
                    type="number"
                />
                <Input
                    data={0}
                    name="breadout"
                    title={"Bread Out"}
                    placeholder="Enter bread out"
                    type="number"
                />
                <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your remarks
                </label>
                <textarea
                    name="remarks"
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder="Write your thoughts here..."
                ></textarea>
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
                <button className="flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0">
                    MOVE
                </button>
            )}
        </form>
    );
}
