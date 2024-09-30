import { useSelector } from "react-redux";
import { CardOrder, ContentCards } from "../components"

export const ListOrdersView = () => {

    const { orders } = useSelector( state => state.orders );

    return (
        <ContentCards >
            {
                orders.map( order => (
                    <CardOrder key={ order.id } { ...order } />
                ))
            }
        </ContentCards>
    )
}
