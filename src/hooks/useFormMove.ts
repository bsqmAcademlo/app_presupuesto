import React, { useState } from "react";
import { toast } from "react-toastify";
import { interfaceFormMove } from "../interfaces";

const initialStateFormMove = {
    moveValue: "",
    moveName: "",
    moveType: "",
    moveId: "",
};

export const useFormMove = ({ HandleMoveMoney }: interfaceFormMove) => {
    const [values, setValues] = useState(initialStateFormMove);

    const onchange = (e: any) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (
            values.moveName === "" ||
            values.moveType === "" ||
            values.moveValue === ""
        )
            return toast.error("Todos los campos son necesarios", {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        values.moveId = crypto.randomUUID();

        HandleMoveMoney(values);

        setValues(initialStateFormMove);

        toast.success("Todo salio correctamente!!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return { values, onchange, handleSubmit };
};
