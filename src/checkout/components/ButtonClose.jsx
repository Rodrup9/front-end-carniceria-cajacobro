import { useContext } from "react";
import { OrdersContext } from "../context";

export const ButtonClose = () => {

    const { showCustomers, setShowCustomers } = useContext(OrdersContext);

    const onClose = () => {
        setShowCustomers(!showCustomers);
    }

    return (

        <button className="buttonClose btn btn-light" onClick={onClose}>
            <i className='bx bx-x'></i>
        </button>
    )
}
