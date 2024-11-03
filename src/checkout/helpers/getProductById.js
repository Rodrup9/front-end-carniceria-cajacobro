
export const getProductById = (id, products) => {
    return products.find(product => product.id == id);
}
