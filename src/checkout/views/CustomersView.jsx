import queryString from "query-string";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCustomerById } from "../helpers";
import { CardProductCustomer } from "../components";
import { CustomersContext } from "../context";
import { useContext, useEffect } from "react";

export const CustomersView = () => {

    const { customers } = useSelector(state => state.customers);

    const { showProducts, setShowProducts } = useContext(CustomersContext);

    const location = useLocation();

    const { id = '' } = queryString.parse(location.search);

    const { name, products } = getCustomerById(id, customers);

    const onShowProducts = () => {
        setShowProducts(!showProducts);
    };

    return (
        <main className="customerView">
            <section className="customerViewCustomer">
                <h1>Información del cliente</h1>
                <div className="">
                    <input type="text" name="name" value={name} />
                </div>
            </section>
            <section className="customerViewProducts">
                <div className="customerViewProductsTitle">
                    <h1>Productos</h1>
                    <button className="buttonConfirm btn" type="button" onClick={ onShowProducts }>
                        <i className='bx bx-plus'></i>
                    </button>
                </div>
                <div className="">
                    {
                        products.map(product => <CardProductCustomer key={product.id} { ...product} price={product.discount} />)
                    }
                </div>
            </section>
            <section className="customerViewDebt">
                <h1>Deudas</h1>    
                <div className="">
                    
                </div>
            </section>
        </main>
    )
}
