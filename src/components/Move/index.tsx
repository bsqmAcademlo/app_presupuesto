import React from "react";
import { InterfaceMoveMovey } from "../../interfaces";

import "./styles.css";

interface propsMove {
    move: InterfaceMoveMovey;
}

export const Move = ({
    move: { moveName, moveType, moveValue, moveDate },
}: propsMove) => {
    return (
        <div
            className={
                moveType === "entry" ? "move styleEntry" : "move styleDischarge"
            }
        >
            <p>
                {moveName} -{" "}
                {new Intl.NumberFormat("co-ES", {
                    style: "currency",
                    currency: "COP",
                }).format(Number(moveValue))}
            </p>
            <p className="moveDate">
                <small>{moveDate}</small>
            </p>
        </div>
    );
};
