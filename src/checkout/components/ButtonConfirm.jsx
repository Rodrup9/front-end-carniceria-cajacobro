import { useNavigate } from "react-router-dom"

export const ButtonConfirm = ({ label, parameters: { number, customer } }) => {

    const navigate = useNavigate();

    const onPay = () => {
        if (!number) return (<h1>Error No se encontro el numero de Orden</h1>)
        if (customer) return navigate(`/orders/pay?number=${number}&customer=${customer}`);
        return navigate(`/orders/pay?number=${number}`);
    }

    return (
        <button className={`buttonConfirm btn ${label && 'btn-text'}`} onClick={onPay} >
            <i className='bx bx-check-circle'></i>
            {label && (<p> {label} </p>)}
        </button>
    )
}