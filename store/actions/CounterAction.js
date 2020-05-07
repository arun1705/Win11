import { COUNTER_ADD, COUNTER_SUBTRACT } from "./ActionTypes";

export const counterAdd = () => {
    return {
        type: COUNTER_ADD
    };
}

export const counterSubtract = () => {
    return {
        type: COUNTER_SUBTRACT
    };
}
