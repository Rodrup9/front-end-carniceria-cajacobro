import { useLocation } from "react-router-dom"
import { getOrderByNumber } from "../helpers"
import queryString from "query-string";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CardProduct, ContentCards, NoteOrderView } from "../components";

export const OrderView = () => {

    const { orders } = useSelector(state => state.orders);

    const location = useLocation();

    const { number = '', customer = '' } = queryString.parse(location.search);

    // TODO: helper para verificar el cliente y traer algun desceunto extra por producto registrado y al final mandarlo a NoteOrderView

    const data = getOrderByNumber(number, orders);
    // const data = useMemo( () => getOrderByNumber( number, orders ), [ number ]);

    if (!data || !data.products) return (<p>Error</p>);

    const total = data.products.reduce((acc, cur) => {
        if (cur.discount > 0) return acc + cur.price - (cur.price * (cur.discount / 100));
        return acc + parseFloat(cur.price);
    }, 0);

    return (
        <div className="orderView">
            <NoteOrderView {...data} total={total} customer={customer} />

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
