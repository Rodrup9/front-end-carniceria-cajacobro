
export const getCustomerById = (id, list) => {

    const response = list.find(customer => customer.id.toString() === id.toString());

    return response;
}
