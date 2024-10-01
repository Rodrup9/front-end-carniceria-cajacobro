import { useLocation } from "react-router-dom"
import { getCustomerById, getOrderByNumber } from "../helpers"
import queryString from "query-string";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CardProduct, ContentCards, NoteOrderView } from "../components";

export const OrderView = () => {

    const { orders } = useSelector(state => state.orders);

    const { customers } = useSelector(state => state.customers);

    const location = useLocation();

    const { number = '', customer = '' } = queryString.parse(location.search);

    const data = getOrderByNumber(number, orders);

    const dataCustomer = getCustomerById(customer, customers);
    // const data = useMemo( () => getOrderByNumber( number, orders ), [ number ]);

    if (!data || !data.products) return (<p>Error</p>);

    const total = data.products.reduce((acc, cur) => {
        const discountCustomer = dataCustomer?.products.find(product => product.id === cur.id);
        if (discountCustomer) return acc + cur.price - (cur.price * (discountCustomer?.discount / 100));
        if (cur.discount > 0) return acc + cur.price - (cur.price * (cur.discount / 100));
        return acc + parseFloat(cur.price);
    }, 0);

    return (
        <div className="orderView">
            <NoteOrderView {...data} total={total} customer={dataCustomer?.name} />

            <div className="orderViewListProducts" >
                {
                    data.products.map(product => (
                        <CardProduct key={product.id} number={number} {...product} />
                    ))
                }
            </div>
        </div>
    )
}
