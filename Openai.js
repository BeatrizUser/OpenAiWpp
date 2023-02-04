// 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
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

export async function getFriend(memoria, text){   
    const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt:`${memoria}You: ${text}\nFriend:`,
        // prompt:`You: ${text}\nFriend:`,
        temperature: 0.8,
        max_tokens: 50,
        top_p: 1.0,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
        stop: ["You:"],
    });
    // await historico.push(`${historico}You: ${text}\nFriend:`)
    console.log(result)
    const res = result.data.choices[0].text
    // const historico = `You: ${text}\nFriend: ${res}`
    return(res)
}