import { useDispatch } from "react-redux";
import { removeOrder } from "../../store/slices/orders/orderSlice";
import { Navigate, useNavigate } from "react-router-dom";

export const ButtonDelete = ({ label, id }) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const onDelete = () => {
        dispatch(removeOrder(id));
        navigate("/orders");
    }

    return (
        <button className={`buttonDelete btn ${label && 'btn-text'}`} onClick={onDelete}>
            <i className='bx bx-trash' ></i>
            {label && (<p> {label} </p>)}
        </button>
    )
}
