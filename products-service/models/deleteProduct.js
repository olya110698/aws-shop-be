import { Client } from "pg";
import { dbOptions } from "./dbOptions";
import { dbTables } from "./dbTables";
import { httpStatus } from "../libs/httpStatus";

const deleteProduct = async (productId) => {
  console.log(dbOptions);

  console.log("Deleting product with id=", productId);

  const client = new Client(dbOptions);
  try {
    await client.connect();
  } catch (err) {
    console.log("Error during db connection", err);
    client.end();
    return {
      status: httpStatus.SERVER_ERROR,
      message: "Error during db connection",
    };
  }

  try {
    let SQLStatments = `begin; delete from stock_model where stock_model.product_id ='${productId}'; delete from product_model where product_model.id ='${productId}'; commit;`;

    await client.query(SQLStatments);

    return {
      status: httpStatus.OK,
      message: `Product with id=${productId} has been deleted.`,
    };
  } catch (err) {
    await client.query("ROLLBACK");

    console.error("Error during db DELETE product request, rollback...", err);

    return {
      status: httpStatus.SERVER_ERROR,
      message: `Error during db DELETE request, try again: ${err}`,
    };
  } finally {
    client.end();
  }
};

export { deleteProduct };
