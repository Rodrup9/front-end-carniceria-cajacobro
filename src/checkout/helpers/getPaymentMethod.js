
export const getPaymentMethod = async () => {

    const response = await fetch();

    const responseParse = JSON.parse(response);

    return responseParse;
}