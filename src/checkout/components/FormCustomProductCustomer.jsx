import { useContext } from "react"
import { CustomersContext } from "../context"
import { useForm } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../helpers";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { addProductCustomer } from "../../store/slices/customers/customersSlice";

export const FormCustomProductCustomer = () => {

    const { products } = useSelector(state => state.products);
    const { customers } = useSelector(state => state.customers);
    const dispatch = useDispatch();

    const location = useLocation();

    const { id: idCustomer = '' } = queryString.parse(location.search);

    const { showCustomProduct: { id, name, state }, setShowCustomProduct, setShowProducts } = useContext(CustomersContext);
    const { priceValue, onInputNumberChange } = useForm({
        priceValue: '0.00',
    });

    const onBack = () => {
        setShowProducts(true);
        setShowCustomProduct({
            state: false,
            id: null,
            name: null
        });
    };

    const onAdd = () => {
        setShowCustomProduct({
            state: false,
            id: null,
            name: null
        });
        const product = getProductById(id, products);
        const productCustom = { ...product, discount: priceValue };
        
        dispatch(addProductCustomer({id: idCustomer, product: productCustom}));        
    };

    return (
        <div className="formCustomProductCustomer">
            <div className="">
                <h3>{name}</h3>
                <div className="">
                    <label htmlFor="priceValue">Designe un precio:</label>
                    <span>$<input className="input" type="text" name="priceValue" onChange={onInputNumberChange} value={priceValue} /></span>
                </div>
            </div>
            <div className="">
                <button className="btn buttonDelete" onClick={onBack} type="button">Regresar</button>
                <button className="btn buttonConfirm" onClick={onAdd} type="button">Agregar</button>
            </div>
        </div>
    )
}
