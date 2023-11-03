import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isSetResponse } from "../../_redux/app-slice";
import { useDispatch } from "react-redux";
export default function ToastNotification({ response }) {
    const data = Promise.resolve(response);
    const dispatch = useDispatch();
    
    useEffect(() => {
        data.then((res) => {
            if (res.status === "loading") {
                showToast("Loading ...", "loading");
            } else if (res.status === "success") {
                showToast(res.message, "success");
            } else if (res.status === "exist") {
                showToast(res.message, "warning");
            }else if (res.status === "error") {
                showToast(res.message, "error");
            }
        });
    }, [data]);

    function showToast(message, type) {
        const id = toast.loading("Loading ...", {
            toastId: "id",
            position: "top-center",
        });
        if (type !== "loading") {
            toast.update(id, {
                render: message,
                autoClose: 500,
                type: type,
                isLoading: false,
            });
            dispatch(isSetResponse({}));
        }
    }

    return (
        <div className="z-[99]">
            <ToastContainer />
        </div>
    );
}
