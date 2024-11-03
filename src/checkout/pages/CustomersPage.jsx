import { Route, Routes } from "react-router-dom"
import { MainLayout, OptionsMenuLayout } from "../layouts"
import { CustomersView, ListCustomersView } from "../views"
import { useContext } from "react";
import { CustomersContext } from "../context";
import { ContentPopUp } from "../components";
import { useSelector } from "react-redux";

export const CustomersPage = () => {
    const { showProducts, showCustomProduct } = useContext(CustomersContext);
    const { products } = useSelector( state => state.products);
    return (
        <MainLayout >
            <div className="customersPage">
                <OptionsMenuLayout />
                <Routes>
                    <Route path="/*" element={<ListCustomersView />} />
                    <Route path="/customer" element={<CustomersView />} />
                </Routes>
            </div>
            { showProducts && <ContentPopUp elements={products} type={'product'} /> }
            { showCustomProduct.state && <ContentPopUp elements={products} type={'customProduct'} /> }
        </MainLayout>
    )
}