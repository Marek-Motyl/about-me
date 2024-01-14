import { Handler } from 'aws-lambda';

interface LambdaEvent { }

export const handler: Handler<LambdaEvent> = async (event, context) => {
  console.log(`Event: ${JSON.stringify(event)}`);
  console.log(`Context: ${JSON.stringify(context)}`);

  return {
    statusCode: 200,
    body: JSON.stringify([]),
  };
};