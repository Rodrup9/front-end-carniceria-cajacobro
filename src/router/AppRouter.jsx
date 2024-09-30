import { Route, Routes } from 'react-router-dom';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';
import { CheckoutRoutes } from '../checkout/routes/CheckoutRoutes';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={
                <PublicRouter >
                    <CheckoutRoutes />
                </PublicRouter>
            } />

            {/* <Route path='/*' element={
                <PrivateRouter >
                    
                </PrivateRouter>
            } /> */}
        </Routes>
    )
}
