
export const CardProductCustomer = ({id, name, price}) => {
    return (
        <div className="cardProductCustomer"> 
            <div className="cardProductCustomerInfo">
                <p>{ name }</p>
                <div className="">
                    <label htmlFor="price">Precio:</label>
                    <input className="input inputHidden" type="text" name="price" value={price} />
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
