import { useContext } from "react";
import { CustomersContext, OrdersContext } from "../context";

export const ButtonClose = ({type}) => {

    const onClose = () => {
        switch (type) {
            case 'customer':
                const { setShowCustomers, showCustomers} = useContext(OrdersContext)
                setShowCustomers(!showCustomers);
                break;
            case 'product':
                const { setShowProducts, showProducts} = useContext(CustomersContext)
                setShowProducts(!showProducts);
                break;
            case 'customProduct':
                const { setShowCustomProduct, showCustomProduct} = useContext(CustomersContext)
                setShowCustomProduct(!showCustomProduct);
                break;
            default:
                // TODO: Enviar error
                break;
          }
    }

    return (

        <button className="buttonClose btn btn-light" onClick={onClose}>
            <i className='bx bx-x'></i>
        </button>
    )
}
