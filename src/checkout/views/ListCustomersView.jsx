import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ViewClienteList } from "../components";

export const ListCustomersView = () => {

    const { customers } = useSelector(state => state.customers);

    // const navigate = useNavigate();

    // const onRemoveCustomer = () => {
    //     navigate(`/orders/order?number=${number}`)
    // }

    return (
        <div className="listCustomersView">
            {
                customers.map( item => <ViewClienteList key={item.id} { ...item } />)
            }
        </div>
    )
}
