import { createSlice } from "@reduxjs/toolkit";

export const customersSlice = createSlice({
    name: 'customer',
    initialState: {
        customers: [
            {
                id: 20,
                name: 'Ramirez',
                products: [
                    {
                        id: 213,
                        name: 'Carne Molida',
                        discount: 15,
                    }
                ]

            },
            {
                id: 325,
                name: 'Perez',
                products: [
                    {
                        id: 213,
                        name: 'Carne Molida',
                        discount: 15,
                    }
                ]

            },
            {
                id: 254,
                name: 'Jose',
                products: [
                    {
                        id: 213,
                        name: 'Carne Molida',
                        discount: 15,
                    }
                ]

            }
        ],
    },
    reducers: {
        addCustomer: (state) => {
            state.state = !state.state;
            localStorage.setItem('navBar', state.state);
        },
        // deleteCustomer: (state, action) => {

        // },
        // addProductCustomer: (state, action) => {

        // },
        // deleteProductCustomer: (state, action) => {

        // },
        // editProductCustomer: (state, action) => {

        // }
    }
});

export const { addCustomer } = customersSlice.actions;