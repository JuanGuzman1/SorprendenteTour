/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
const client = new SESClient({ region: process.env.REGION });

exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventName);
    if (record.eventName === "INSERT") {
      //pull off items from stream
      const name = record.dynamodb.NewImage.name.S;
      const email = record.dynamodb.NewImage.email.S;
      const phone = record.dynamodb.NewImage.phone.S;
      const phoneType = record.dynamodb.NewImage.phoneType.S;
      const subject = record.dynamodb.NewImage.subject.S;
      const message = record.dynamodb.NewImage.message.S;

      console.log("data", record.dynamodb.NewImage);

      const command = new SendEmailCommand({
        Destination: {
          ToAddresses: [process.env.SES_EMAIL],
        },
        Source: process.env.SES_EMAIL,
        Message: {
          Subject: { Data: subject },
          Body: {
            Text: {
              Data: `Mensaje de ${name} con correo ${email} y telefono ${phoneType} ${phone}
                      Mensaje: 
                      ${message}
                    `,
            },
          },
        },
      });

      await client.send(command);
    }
  }
  return { status: "done" };
};
