import { useForm } from "../hooks";

export const CardProductCustomer = ({id, name, price}) => {

    const { priceProduct, onInputNumberChange } = useForm({
        priceProduct: price
    });
    return (
        <div className="cardProductCustomer"> 
            <div className="cardProductCustomerInfo">
                <p>{ name }</p>
                <div className="cardProductCustomerInfoPrice">
                    <label htmlFor="price">Precio: $</label>
                    <input className="input inputHidden" type="text" name="priceProduct" value={priceProduct} onChange={onInputNumberChange} />
                </div>
            </div>
            <div className="cardProductCustomerAction">
                <button className="buttonDelete btn" type="button">
                    <i className='bx bx-trash' ></i>
                </button>
            </div>
        </div>
    )
}
