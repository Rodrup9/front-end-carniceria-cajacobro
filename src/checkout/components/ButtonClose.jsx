import { useContext } from "react";
import { CustomersContext, OrdersContext } from "../context";

export const ButtonClose = ({type}) => {

    let context = null;

    if (type === 'customer') {
        context = useContext(OrdersContext);
    } else if (type === 'product' || type === 'customProduct') {
        context = useContext(CustomersContext);
    }

    const onClose = () => {
        switch (type) {
            case 'customer':
                const { setShowCustomers, showCustomers} = context;
                setShowCustomers(!showCustomers);
                break;
            case 'product':
                const { setShowProducts, showProducts} = context;
                setShowProducts(!showProducts);
                break;
            case 'customProduct':
                const { setShowCustomProduct, showCustomProduct} = context;
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
