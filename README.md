# aws-shop-be

backend
BackEnd Repository for AWS web store

https://github.com/olya110698/aws-shop-be/pull/2

Self check:

TOTAL POINTS - _**11 points**_

---

## **Evalution Criteria**

- [x] 1 - poiproduct-service serverless config contains configuration for 2 lambda functions, API is not working at all, but YAML configuration is correct
- [x] 2 - The getProductsList OR getProductsById lambda function returns a correct response (POINT1)
- [x] 3 - The getProductsById AND getProductsList lambda functions return a correct response code (POINT2)
- [x] 4 - Your own Frontend application is integrated with product service (/products API) and products from product-service are represented on Frontend. AND POINT1 and POINT2 are done.

## **Additional options**

- [x] Async/await is used in lambda functions.
- [x] ES6 modules are used for product-service implementation.
- [x] Webpack is configured for product-service.
- [x] SWAGGER documentation is created for product-service.
- [x] Lambda handlers are covered by basic UNIT tests (NO infrastructure logic is needed to be covered)
- [x] Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase.
- [x] Main error scenarious are handled by API ("Product not found" error).

---

# **FrontEnd**

- FrontEnd integrated with product service HTTP API & images from S3 Bucket: https://dsqgr9m2xn6dg.cloudfront.net/
- FrontEnd Task-3 Pull Request : - https://github.com/olya110698/shop-react-redux-cloudfront/pull/2

# **BackEnd**

---

| Lambda          | Description                   | Method | URL                                                                                                      |
| --------------- | ----------------------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| getProductsList | get ALL products in JSON      | GET    | https://8i2g9e3a1b.execute-api.eu-west-1.amazonaws.com/dev/products                                      |
| getProductsById | get ONE product in JSON by id | GET    | https://8i2g9e3a1b.execute-api.eu-west-1.amazonaws.com/dev/products/7567ec4b-b10c-48c5-9345-fc73c48a80a4 |
| getProductsById | Product not found             | GET    | https://8i2g9e3a1b.execute-api.eu-west-1.amazonaws.com/dev/products/777                                  |

---

# **Swagger documentation**

# https://app.swaggerhub.com/apis/olya110698/task3/1.0.0-oas3
