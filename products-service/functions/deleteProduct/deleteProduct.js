import { Client } from "pg";
import { deleteProduct } from "../../models/deleteProduct";
import { handleResponse } from "../../libs/handleResponse";
import { httpStatus } from "../../libs/httpStatus";

export const handler = async (event) => {
  console.log(event);

  try {
    const { productId } = event.pathParameters || "";

    console.log(productId);

    if (productId === "")
      return handleResponse(
        `Parametr productId did not provided.`,
        httpStatus.BAD_REQUEST
      );

    const resaultDeleteProduct = await deleteProduct(productId);

    return handleResponse(
      JSON.stringify(resaultDeleteProduct.message),
      resaultDeleteProduct.status
    );
  } catch (err) {
    return handleResponse(
      `Error during deleteProduct function execution: ${err}`,
      httpStatus.SERVER_ERROR
    );
  }
};
