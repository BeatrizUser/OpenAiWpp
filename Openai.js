// 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
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-SD6qjsfRsEie9HkVfCvaWGOc",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
async function res(){
    const response = await openai.listEngines();
};


const axios = require('axios');

async function getimage(){
    await axios.post(
    'https://api.openai.com/v1/images/generations',
    // '{\n  "prompt": "A cute baby sea otter",\n  "n": 2,\n  "size": "1024x1024"\n}',
    {
        'prompt': 'A cute baby sea otter',
        'n': 2,
        'size': '1024x1024'
    },
    {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        }
    }
    )
    return res()
}

console.log(getimage())