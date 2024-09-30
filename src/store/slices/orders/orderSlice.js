import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orders: [
            {
                id: '342',
                number: 21432545,
                products: [
                    {
                        id: 92193213,
                        name: 'Carne Molida',
                        amount: {
                            unit: 'kg',
                            amount: 1273
                        },
                        price: 132.43,
                        discount: 20
                    },
                    {
                        id: 2143654,
                        name: 'Queso',
                        amount: {
                            unit: 'kg',
                            amount: 325
                        },
                        price: 200.43,
                        discount: 20
                    },
                ],
                date: '21/30/0235',
                hour: '12:98'
            },
            {
                id: '324645',
                number: 36578112,
                products: [
                    {
                        id: 92193213,
                        name: 'Carne Molida',
                        amount: {
                            unit: 'kg',
                            amount: 1273
                        },
                        price: 132.43,
                        discount: 20
                    },
                    {
                        id: 2143654,
                        name: 'Queso',
                        amount: {
                            unit: 'kg',
                            amount: 325
                        },
                        price: 200.43,
                        discount: 20
                    },
                ],
                date: '21/30/0235',
                hour: '12:98'
            },
            {
                id: '3465454',
                number: 67568870765,
                products: [
                    {
                        id: 92193213,
                        name: 'Carne Molida',
                        amount: {
                            unit: 'kg',
                            amount: 1273
                        },
                        price: 132.43,
                        discount: 20
                    },
                    {
                        id: 2143654,
                        name: 'Queso',
                        amount: {
                            unit: 'kg',
                            amount: 325
                        },
                        price: 200.43,
                        discount: 20
                    },
                ],
                date: '21/30/0235',
                hour: '12:98'
            },
        ]
    },
    reducers: {
        addOrder: (state, action) => {
            state.orders = [...state.orders, action.payload];
        },
        removeOrder: (state, action) => {
            state.orders = state.orders.filter(order => order?.id !== action.payload);
        },
        removeProductOrder: (state, action) => {
            const { number, id } = action.payload;
            const order = state.orders.find(order => order.number == number);

            if (order) {
                order.products = order.products.filter(product => product.id != id);
            }

        }
    }
});

export const { addOrder, removeOrder, removeProductOrder } = orderSlice.actions;