import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom';
import { CustomersContext } from '../context';

export const CardProductName = ({id, name}) => {
    // const navigate = useNavigate();

    const { showProducts, setShowProducts, showCustomProduct, setShowCustomProduct } =  useContext(CustomersContext);

    const onProduct = () => {
        setShowProducts(!showProducts);
        setShowCustomProduct({
            state: !showCustomProduct.state,
            id,
            name
        });
    }
    return (
        <button type='button' className='cardProductName' onClick={onProduct}>
            {name}
        </button>
    )
}
