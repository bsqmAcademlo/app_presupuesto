import React from "react";

import "./styles.css";

interface PropsHead {
    money: number;
}

export const Head = ({ money }: PropsHead) => {
    return (
        <div>
            <h2 className="title">Mi libreta 💵</h2>
            <p className={money >= 0 ? "money moneyPosity" : "money Negative"}>
                {new Intl.NumberFormat("co-ES", {
                    style: "currency",
                    currency: "COP",
                }).format(Number(money))}
            </p>
        </div>
    );
};
