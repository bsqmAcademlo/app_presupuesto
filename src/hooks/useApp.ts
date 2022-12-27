import React, { useEffect, useState } from "react";
import { InterfaceMoveMovey } from "../interfaces";

const isMoneyCurrent = localStorage.getItem("MoneyCurrent");
const isMoveCurrent = localStorage.getItem("MoveCurrent");

const lsMoney = isMoneyCurrent ? JSON.parse(isMoneyCurrent) : 0;
const lsMove = isMoveCurrent ? JSON.parse(isMoveCurrent) : [];

export const useApp = () => {
    const [money, setMoney] = useState<number>(lsMoney);
    const [moveMoney, setMoveMoney] = useState<InterfaceMoveMovey[]>(lsMove);

    useEffect(() => {
        localStorage.setItem("MoneyCurrent", JSON.stringify(money));
    }, [money]);

    useEffect(() => {
        localStorage.setItem("MoveCurrent", JSON.stringify(moveMoney));
    }, [moveMoney]);

    const handleMoney = (value: any) => {
        setMoney(value);
    };

    const HandleMoveMoney = (move: InterfaceMoveMovey) => {
        setMoveMoney([...moveMoney, move]);

        if (move.moveType === "entry") {
            handleMoney(money + Number(move.moveValue));
        } else {
            handleMoney(money - Number(move.moveValue));
        }
    };

    return {
        money,
        moveMoney,
        HandleMoveMoney,
    };
};
