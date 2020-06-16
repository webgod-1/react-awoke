import { ActionTypes } from "../../utils/constants";

export const fetchTransactions = payload => ({
    type: ActionTypes.FETCH_TRANSACTIONS,
    payload
});
