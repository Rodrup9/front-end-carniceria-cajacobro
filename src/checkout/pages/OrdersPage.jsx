import { MainLayout } from "../layouts"
import { Route, Routes } from "react-router-dom";
import { ListOrdersView, OrderView, PayView } from "../views";
import { useContext } from "react";
import { OrdersContext } from "../context";
import { ContentPopUp } from "../components";
import { useSelector } from "react-redux";

export const OrdersPage = () => {

    const { customers } = useSelector(state => state.customers);

    const { showCustomers } = useContext(OrdersContext);

    return (
        <>
            <MainLayout >
                <div className="orderPage">

                    <Routes>
                        <Route path="/*" element={<ListOrdersView />} />
                        <Route path="/order" element={<OrderView />} />
                        <Route path="/pay" element={<PayView />} />
                    </Routes>

                </div>

            </MainLayout>

            {showCustomers && <ContentPopUp elements={customers} type={'customer'} />}
        </>
    )
}
