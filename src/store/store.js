import { configureStore } from '@reduxjs/toolkit';
import { orderSlice } from './slices/orders';
import { navBarSlice } from './slices/navBar';
import { customersSlice } from './slices/customers';

export const store = configureStore({
    reducer: {
        orders: orderSlice.reducer,
        navBar: navBarSlice.reducer,
        customers: customersSlice.reducer,
    }
})