import {Transaction} from "../../home/Model";

export interface TransactionsApiModel {
    transactions: Transaction[],
    diff: number,
    income_sum: number,
    expense_sum: number
}