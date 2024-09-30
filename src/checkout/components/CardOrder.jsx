import { useDispatch } from "react-redux"
import { removeOrder } from "../../store/slices/orders/orderSlice";
import { Link } from "react-router-dom";

export const CardOrder = ({ id, number, products, date, hour }) => {

    const dispatch = useDispatch();

    const onDeleteOrder = ( event ) => {
        event.preventDefault();
        dispatch( removeOrder( id ) );
    }

    return (
        <Link to={`/orders/order?number=${number}`} className="cardOrder">
            <div className="cardOrderHeader">
                <p className="cardOrderNum">{ number }</p>
                <i className='bx bx-trash' onClick={ onDeleteOrder } ></i>
            </div>

            <div className="cardOrderBody">
                <p>Articulos: <span>{ products.length }</span></p>
            </div>

            <div className="cardOrderFooter">
                <pre className="cardOrderDate">{ date }</pre>
                <pre className="cardOrderHour">{ hour }</pre>
            </div>
        </Link>
    )
}
