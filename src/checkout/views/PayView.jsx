import queryString from "query-string";
import { useLocation } from "react-router-dom"

export const PayView = () => {

    const location = useLocation();

    const { number = '', customer = '' } = queryString.parse(location.search);

    return (
        <div className="payView">

        </div>
    )
}
