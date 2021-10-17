import AWS from "aws-sdk-mock";
import { handler as importProductsFile } from "./importProductsFile.js";

const request = (method = "GET", qsParam = { name: "products.csv" }) => {
  return { httpMethod: method, queryStringParameters: qsParam };
};

const response = (body = {}, stCode = 202) => {
  return {
    statusCode: stCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(body),
    isBase64Encoded: false,
  };
};

describe("importProductsFile", () => {
  const mockUrl =
    "https://task-5-csv-uploaded-olya.s3.eu-west-1.amazonaws.com/uploaded/products.csv";

  beforeEach(() => {
    AWS.mock("S3", "getSignedUrl", mockUrl);
    AWS.restore("S3");
  });

  it(`should successfully get \"signedUrl\"`, async () => {
    const result = await importProductsFile(request());
    expect(result.body.split("?")[0]).toEqual(mockUrl);
  });

  it(`should get \"signedUrl\, created for \"PutObject\"`, async () => {
    const result = await importProductsFile(request());
    expect(new URL(result.body).searchParams.get("x-id")).toEqual("PutObject");
  });

  it(`should return Status Code 202 with queryStringParameter \"name\" = products.csv `, async () => {
    const result = await importProductsFile(request());
    expect(result.statusCode).toBe(202);
  });

  it(`should return Status Code \"400 Error\" without parameters `, async () => {
    const result = await importProductsFile(request("GET", null));
    expect(result.statusCode).toBe(400);
  });

  it(`should return Status Code \"400 Error\" with queryStringParameter \"name\" = \"\". `, async () => {
    const result = await importProductsFile(request("GET", { name: "" }));
    expect(result.statusCode).toBe(400);
  });

  it(`should return Status Code \"400 Error\" when query does not have \"name\" parameter. `, async () => {
    const result = await importProductsFile(request("GET", { name22: "" }));
    expect(result.statusCode).toBe(400);
  });
});
