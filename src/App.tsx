import React from "react";
import { Container, FormMove, Head, Moves } from "./components";
import { useApp } from "./hooks";

import { ToastContainer } from "react-toastify";

export const App = () => {
    const { HandleMoveMoney, money, moveMoney } = useApp();

    return (
        <Container>
            <Head money={money} />
            <div className="contentGrid">
                <FormMove HandleMoveMoney={HandleMoveMoney} />
                <Moves moveMoney={moveMoney} />
            </div>
            <ToastContainer />
        </Container>
    );
};
