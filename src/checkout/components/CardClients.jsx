import queryString from "query-string";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { OrdersContext } from "../context";

export const CardClients = ({ name, id }) => {

    const location = useLocation();

    const { number = '' } = queryString.parse(location.search);

    const { showCustomers, setShowCustomers } = useContext(OrdersContext);

    const onSelect = () => {
        setShowCustomers(!showCustomers);
    }

    return (
        <Link to={`/orders/order?number=${number}&customer=${id}`} className="cardClients" onClick={onSelect}>
            <div className="">
                <i className='bx bx-user'></i>
            </div>
            <div>
                <p>{name}</p>
            </div>
        </Link>
    )
}
