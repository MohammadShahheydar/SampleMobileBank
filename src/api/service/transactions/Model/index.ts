import {Transaction} from "../../home/Model";

export interface TransactionsApi {
    transactions: Transaction[],
    diff: number,
    income_sum: number,
    expense_sum: number
}