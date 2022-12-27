import React from "react";
import { useFormMove } from "../../hooks";

import { interfaceFormMove } from "../../interfaces";
import { Input } from "../Input";
import "./styles.css";

export const FormMove = ({ HandleMoveMoney }: interfaceFormMove) => {
    const { handleSubmit, onchange, values } = useFormMove({
        HandleMoveMoney,
    });
    const { moveName, moveValue, moveType } = values;

    return (
        <form onSubmit={handleSubmit} className="formMove">
            <Input
                type={"number"}
                placeholder={"Ingresa la cantidad"}
                value={moveValue}
                name={"moveValue"}
                onchange={onchange}
            />
            <Input
                type={"text"}
                placeholder={"Ingrese la descripcion"}
                value={moveName}
                name={"moveName"}
                onchange={onchange}
            />
            <select name="moveType" value={moveType} onChange={onchange}>
                <option value="" disabled>
                    Sale o entra?
                </option>
                <option value="entry">Dinero que entra</option>
                <option value="discharge">Dinero que sale</option>
            </select>
            <button className="btnSaveMove">Guardar</button>
        </form>
    );
};
