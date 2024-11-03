import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [
            {
                id: 92193213,
                name: 'Carne Molida',
                price: 132.43
            },
            {
                id: 2143654,
                name: 'Queso',
                price: 200.43,
            }
        ]
    },
    reducers: {
        // addOrder: (state, action) => {
        //     state.orders = [...state.orders, action.payload];
        // },
        // removeOrder: (state, action) => {
        //     state.orders = state.orders.filter(order => order?.id !== action.payload);
        // },
        // removeProductOrder: (state, action) => {
        //     const { number, id } = action.payload;
        //     const order = state.orders.find(order => order.number == number);

        //     if (order) {
        //         order.products = order.products.filter(product => product.id != id);
        //     }

        // }
    }
});

export const { } = productSlice.actions;