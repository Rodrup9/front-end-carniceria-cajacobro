import { useState } from "react";
import { CustomersContext } from "./CustomersContext";

export const CustomersProvider = ({children}) => {
    const [showProducts, setShowProducts] = useState(false);

    const [showCustomProduct, setShowCustomProduct] = useState({
        state: false,
        id: null,
        name: null,
    });

    return (
        <CustomersContext.Provider value={{ showProducts, setShowProducts, showCustomProduct, setShowCustomProduct }} >
            {children}
        </CustomersContext.Provider>
    )
}
