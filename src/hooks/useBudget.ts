import { useContext } from "react"
import { BudgetContext } from "../context/BudgetContest"

export const useBudget = () => {
    const context = useContext(BudgetContext)
    if(!context){
        throw new Error("Use budget must be used within a BudgetProvider")
    }
    return context
}