import React from "react";
import moment from "moment";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { interfaceFormMove } from "../../interfaces";
import "./styles.css";
import { toast } from "react-toastify";

type Inputs = {
    moveName: string;
    moveValue: string;
    moveType: string;
};

const schema = yup
    .object({
        moveName: yup.string().required(),
        moveValue: yup.string().required(),
        moveType: yup.string().required(),
    })
    .required();

export const FormMove = ({ HandleMoveMoney }: interfaceFormMove) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<Inputs>({ resolver: yupResolver(schema) });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const newMove = {
            ...data,
            moveId: crypto.randomUUID(),
            moveDate: moment().format("llll"),
        };

        HandleMoveMoney(newMove);

        toast.success("Todo salio de maravilla!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });

        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="formMove">
            <div className="styleInput">
                <input
                    type="number"
                    {...register("moveValue")}
                    placeholder={"Ingresa la cantidad"}
                    className={errors.moveValue && "styleInputError"}
                />
                {errors.moveValue && (
                    <span>
                        <small>
                            Debes ingresar la <strong>cantidad</strong> para
                            continuar
                        </small>
                    </span>
                )}
            </div>

            <div className="styleInput">
                <input
                    type="text"
                    {...register("moveName")}
                    placeholder={"Ingresa la descripcion"}
                    className={errors.moveName && "styleInputError"}
                />
                {errors.moveName && (
                    <span>
                        <small>
                            Debes ingresar la <strong>descripcion</strong> para
                            continuar
                        </small>
                    </span>
                )}
            </div>

            <div className="styleSelect">
                <select
                    {...register("moveType")}
                    defaultValue={""}
                    className={errors.moveType && "styleInputError"}
                >
                    <option value="" disabled>
                        Sale o entra?
                    </option>
                    <option value="entry">Dinero que entra</option>
                    <option value="discharge">Dinero que sale</option>
                </select>
                {errors.moveType && (
                    <span>
                        <small>
                            Que tipo de <strong>movimiento</strong> es?
                        </small>
                    </span>
                )}
            </div>

            <button
                className={
                    !Object.values(watch()).every((value) => value !== "")
                        ? "btnSaveMove btnNoPointer"
                        : "btnSaveMove"
                }
            >
                Guardar
            </button>
        </form>
    );
};
