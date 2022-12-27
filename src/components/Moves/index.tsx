import React from "react";
import { InterfaceMoveMovey } from "../../interfaces";
import { Move } from "../Move";
import "./styles.css";

interface propsMoves {
    moveMoney: InterfaceMoveMovey[];
}

export const Moves = ({ moveMoney }: propsMoves) => {
    return (
        <div className="moves">
            {moveMoney.map((move) => (
                <Move move={move} key={move.moveId} />
            ))}
        </div>
    );
};
