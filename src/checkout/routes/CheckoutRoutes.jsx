import { Route, Routes } from "react-router-dom"
import { CustomersPage, DebtsPage, EmployeesPage, OrdersPage } from "../pages"
import { CustomersProvider, OrdersProvider } from "../context"

export const CheckoutRoutes = () => {
    return (
        <Routes>

            <Route path="/orders/*" element={
                <OrdersProvider >
                    <OrdersPage />
                </OrdersProvider>
            } />
            <Route path="/employees/*" element={<EmployeesPage />} />
            <Route path="/customers/*" element={
                <CustomersProvider>
                    <CustomersPage />
                </CustomersProvider>
            } />
            <Route path="/debts/*" element={<DebtsPage />} />
        </Routes>
    )
}
