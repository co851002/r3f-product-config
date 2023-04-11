import { Configuration, OpenAIApi } from "openai";

const handler = async (event, context) => {
  
  console.log('Request event:', event);
  const prompt = JSON.parse(event.body).prompt;
  console.log('incoming:', JSON.parse(event.body).prompt);

  const configuration = await new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);

  let image = ""  

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: 'b64_json'
    });

    image = response.data.data[0].b64_json;
  } catch (error) {
    console.error(`Error while creating image: ${error.message}`);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: `Failed to create image: ${error.message}`,
        openaiError: error.response?.data, // Include OpenAI API error data
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({photo: image})
  };
};

export { handler };
