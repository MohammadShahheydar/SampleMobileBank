export interface HomeData {
    fullname: string,
    balance: number,
    transactions: Transaction[]
}

export interface Transaction {
    type: "income" | "expense",
    amount: number,
    datetime: string,
    note: string,
    category: string
}