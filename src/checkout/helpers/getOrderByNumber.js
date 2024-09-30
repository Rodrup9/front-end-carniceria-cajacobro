import { useSelector } from "react-redux"

export const getOrderByNumber = ( number, list ) => {

    const response = list.find( order => order.number.toString() === number.toString() );

    return response;
}