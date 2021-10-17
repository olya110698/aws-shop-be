export const handler = async (event, ctx, callback) => {
  console.log("Event: ", JSON.stringify(event));

  if (event["type"] != "TOKEN") callback("Unauthorized");

  try {
    const { authorizationToken } = event;

    const encodedCreds = authorizationToken.split(" ")[1];

    const buffer = Buffer.from(encodedCreds, "base64");

    const [username, password] = buffer.toString("utf-8").split(":");

    console.log(username, password);

    const storedUserPassword = process.env.selub;

    console.log("Password from .env: " + storedUserPassword);

    const effect =
      !storedUserPassword || storedUserPassword !== password ? "Deny" : "Allow";

    const policy = generatePolicy(encodedCreds, event.methodArn, effect);

    callback(null, policy);
  } catch (error) {
    callback(`Unauthorized: ${error.message}`);
  }
};

function generatePolicy(principalId, resource, effect = "Deny") {
  return {
    principalId: principalId,

    policyDocument: {
      Version: "2012-10-17",

      Statement: {
        Action: "execute-api:Invoke",

        Effect: effect,

        Resource: resource,
      },
    },
  };
}
