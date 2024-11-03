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
                id: 223,
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
                id: 567,
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
                id: 897,
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
                id: 47,
                name: 'Ricardo Mendez',
                products: [
                    {
                        id: 92193213,
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
        // addCustomer: (state) => {
        //     state.state = !state.state;
        //     localStorage.setItem('navBar', state.state);
        // },
        // deleteCustomer: (state, action) => {

        // },
        addProductCustomer: (state, action) => {
            console.log(action);

            const { id, product } = action.payload;

            const customer = state.customers.find(customer => id == customer.id);

            if (customer) customer.products = [...customer.products, product]

        },
        // deleteProductCustomer: (state, action) => {

        // },
        // editProductCustomer: (state, action) => {

        // }
    }
});

export const { addProductCustomer } = customersSlice.actions;