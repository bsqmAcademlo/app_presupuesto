export interface InterfaceMoveMovey {
    moveValue: string;
    moveName: string;
    moveType: string;
    moveId: string;
    moveDate: string;
}

export interface interfaceFormMove {
    HandleMoveMoney: (move: InterfaceMoveMovey) => void;
}
