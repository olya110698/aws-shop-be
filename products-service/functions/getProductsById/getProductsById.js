 
import products from '../productList.json';


const response = (products = {}, status = 200) => ({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*',
  },
  statusCode: status,
  body: JSON.stringify(products),
});

export const handler = async event => {
        const { productId } = event.pathParameters || {};
        const product = await products.find(({ id }) => id === productId);
        if (!product)   { return response({ message: 'Error: Product not found!' }, 400);
          }
    return response({ ...product }, 200);
};