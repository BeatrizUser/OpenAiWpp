// 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
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);
const historico = 

export async function getFriend(text){    
    const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:`${historico}You: ${text}\nFriend:`,
        temperature: 0.5,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
        });
        return(result.data.choices[0].text)
}