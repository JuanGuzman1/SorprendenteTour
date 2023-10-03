/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const fetch = require("node-fetch");

exports.handler = async (event) => {
  const { typeName, arguments: arg } = event;

  if (typeName !== "Mutation") {
    throw new Error("Request is not a mutation");
  }

  if (!arg?.amount) {
    throw new Error("Amount argument is required");
  }
  const { CLIENT_ID, APP_SECRET, BASE_URL } = process.env;

  const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64");
  const responseToken = await fetch(`${BASE_URL}/v1/oauth2/token`, {
    method: "post",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });

  const tokenData = await responseToken.json();

  const purchaseAmount = arg.amount;
  const accessToken = tokenData.access_token;
  const url = `${BASE_URL}/v2/checkout/orders`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "MXN",
            value: purchaseAmount,
          },
        },
      ],
    }),
  });

  const jsonData = await response.json();

  return {
    statusCode: 200,
    id: jsonData?.id,
    status: jsonData?.status,
    links: jsonData?.links,
  };
};
