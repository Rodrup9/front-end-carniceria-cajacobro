import { useDispatch } from "react-redux"
import { removeProductOrder } from "../../store/slices/orders/orderSlice";

export const CardProduct = ({ number, name, id, amount:{ amount, unit }, price }) => {

    const dispatch = useDispatch();

    const onRemoveProductOrder = () => {
        dispatch( removeProductOrder({ number, id }) );
    }

    return (
        <div className="cardProduct">
            <div className="cardProductHeader">
                <b><p>{ name }</p></b>
                <i className='bx bx-trash' onClick={ onRemoveProductOrder } ></i>
            </div>
            <div className="cardProductFooter">
                <p>{ amount + unit }</p>
                <p><span>$</span>{ price }</p>
            </div>
        </div>
    )
}
