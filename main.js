import wppconnect from '@wppconnect-team/wppconnect'
import * as openai from './Openai.js';

wppconnect
  .create({
    session: 'sessionName',
    statusFind: (statusSession, session) => {
      // return: isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken
      console.log('Status Session: ', statusSession);
      // create session wss return "serverClose" case server for close
      console.log('Session name: ', session);
    },
  })
  .then((client) => start(client))
  .catch((error) => console.log(error));
  
  const memoria = [];

  async function start(client) {
  client.onMessage(async (message) => {
    if (message.body) {
      memoria.push(`You:${message.body}Friend:`)
      const historico = memoria.join(" ")
      const msg = await openai.getFriend(historico)
      memoria.push(`${historico}${msg}`)
      console.log(memoria.shift())
      client
        .sendText(message.from, `${msg}`)
        .then((result) => {
          // console.log('Result: ', result); //return object success
        })
        .catch((erro) => {
          // console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}
// 000000000000@c.us
// 5521991986769@c.us -> Bia


