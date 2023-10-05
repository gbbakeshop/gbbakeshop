import React, { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastNotification({ response }) {
    const toastId = React.useRef(null);

    useEffect(() => {
        if (response) {
            response.then((res) => {
                console.log('res.status',res.status)
                if (res.status === "loading") {
                    showToast("Loading ...", "loading");
                } else if (res.status === "success") {
                    showToast(res.message, "success");
                } else if (res.status === "exist") {
                    showToast(res.message, "warning");
                } else {
                    showToast("Error 404", "error");
                }
            });

        }
    }, [response]);

    function showToast(message, type) {
        const id = toast.loading("Loading ...", {
            toastId: "id",
            position: "top-center",
        });
        if (type !== "loading") {
            setTimeout(() => {
                toast.update(id, { 
                    render: message,
                    autoClose: 1000, 
                    type:type, 
                    isLoading: false 
                });
            }, 1000);
        }

    }

    return (
        <>
            <ToastContainer />
        </>
    );
}
