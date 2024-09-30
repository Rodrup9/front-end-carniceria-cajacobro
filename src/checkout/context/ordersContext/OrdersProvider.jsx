import { useState } from "react"
import { OrdersContext } from "./OrdersContext";

export const OrdersProvider = ({ children }) => {

    const [showCustomers, setShowCustomers] = useState(false)

    return (
        <OrdersContext.Provider value={{ showCustomers, setShowCustomers }} >
            {children}
        </OrdersContext.Provider>
    )
}
