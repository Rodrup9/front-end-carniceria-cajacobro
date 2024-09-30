import { ButtonBack, ButtonConfirm, ButtonDelete } from "./index"
import { useContext, useState } from "react";
import { OrdersContext } from '../context'

export const NoteOrderView = ({ number, products, date, hour, total, id, customer }) => {

    const { showCustomers, setShowCustomers } = useContext(OrdersContext);

    const onShowCustomers = () => {
        setShowCustomers(!showCustomers);
    }

    return (
        <div className="noteOrderView">
            <div className="noteOrderViewNumber">
                <div>
                    <ButtonBack />
                    <h2 >Orden <span>{number}</span></h2>
                </div>
                <div>
                    <p> {customer || 'Persona'} </p>
                    <button className="buttonBack btn btn-light" onClick={onShowCustomers}><i className='bx bxs-user-check'></i></button>
                </div>
            </div>

            <div className="noteOrderViewDetails">
                <div className="">
                    <h2>Detalles</h2>
                    <div className="noteOrderViewDetailsBody">
                        <div className="">
                            <p>Producto</p>
                            <p>Cantidad</p>
                            <p>Desto.</p>
                            <p>Precio</p>
                            <p>PcD</p>
                        </div>

                        {
                            products.map(product =>
                                <div key={product.id} className="">
                                    <p>{product.name}</p>
                                    <p>{product.amount.amount.toFixed()}<span>{product.amount.unit}</span></p>
                                    <p>{product.discount}<span>%</span></p>
                                    <p><span>$</span>{product.price.toFixed(2)}</p>
                                    <p><span>$</span>{(product.price - (product.price * (product.discount / 100))).toFixed(2)}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="noteOrderViewDetailsDetails">
                    <pre>{date}</pre>
                    <pre>{hour}</pre>
                </div>
            </div>
            <div className="noteOrderViewTotal">
                <h2>Total</h2>
                <h1><span>$</span>{total}</h1>
            </div>

            <div className="noteOrderViewFooter">
                <ButtonDelete label='Borrar' id={id} />
                <ButtonConfirm label='Confirmar' />
                {/*// TODO: Confirmar eliminación */}
                {/*// TODO: Funcionalidad de Button confirmar */}
            </div>
        </div>
    )
}
